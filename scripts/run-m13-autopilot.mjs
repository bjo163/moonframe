#!/usr/bin/env node
// Local unattended M13 Codex runner. No public publish/deployment, force pushes, or secrets.
import fs from 'node:fs';
import path from 'node:path';
import { spawn, spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
process.chdir(root);
const args = process.argv.slice(2);
const untilDone = args.includes('--until-done');
const push = args.includes('--push');
const dryRun = args.includes('--dry-run');
const cyclesFlag = args.find(x => x.startsWith('--max-cycles='));
const cyclesMax = untilDone ? Infinity : cyclesFlag ? Number(cyclesFlag.split('=')[1]) : 25;
if (Number.isNaN(cyclesMax) || cyclesMax < 1) throw Error('Invalid --max-cycles');
const logDir = path.join(root, '.m13-autopilot');
fs.mkdirSync(logDir, { recursive: true });
const logfile = path.join(logDir, 'run-' + Date.now() + '.log');
const stream = fs.createWriteStream(logfile, { flags: 'a', mode: 0o600 });
const say = msg => { process.stdout.write('[M13] ' + msg + '\n'); stream.write('[M13] ' + msg + '\n'); };
const cmd = (executable, argv = [], check = true) => {
  // Windows installs pnpm as a .CMD shim, which Node cannot spawn without a shell.
  // The runner's pnpm arguments below are fixed literals, so shell mode is bounded here.
  const windowsPnpm = process.platform === 'win32' && executable === 'pnpm';
  const r = spawnSync(windowsPnpm ? 'pnpm.cmd' : executable, argv, {
    cwd: root,
    encoding: 'utf8',
    maxBuffer: 32 * 1024 * 1024,
    shell: windowsPnpm,
  });
  if (r.error) throw r.error;
  if (check && r.status !== 0) throw Error(executable + ' ' + argv.join(' ') + ' failed: ' + (r.stderr || r.stdout).slice(-2000));
  return r;
};
const git = (...argv) => cmd('git', argv).stdout.trim();
function changes() {
  const tracked = cmd('git', ['diff', '--name-only', '-z']).stdout.split('\0');
  const staged = cmd('git', ['diff', '--cached', '--name-only', '-z']).stdout.split('\0');
  const untracked = cmd('git', ['ls-files', '--others', '--exclude-standard', '-z']).stdout.split('\0');
  return [...new Set([...tracked, ...staged, ...untracked].filter(Boolean))];
}
function countTasks() {
  let total=0, done=0, blocked=0;
  for (const filename of ['docs/backlog/visual-fidelity-subatomic-tasks.md','docs/backlog/reference-mockups-subatomic-tasks.md','docs/backlog/m13-preflight-remediation-tasks.md']) {
    const s=fs.readFileSync(path.join(root,filename),'utf8');
    const matches=s.split('\n').filter(line=>/^- \[[ x]\] \*\*MF-(?:VF|PF)-\d{3} — /.test(line));
    total+=matches.length;
    for (const line of matches) {
      if (line.startsWith('- [x]')) done++;
      else if (/·\s*`blocked`(?:\s|·)/.test(line)) blocked++;
    }
  }
  return {total,done,blocked,pending:total-done-blocked};
}
const forbidden = name => /(^|\/)(\.env(?:\.|$)|\.git\/|\.aws|\.ssh|\.codex\/|\.agents\/|id_rsa|id_ed25519|secret[s]?(?:\.|\/)|credential[s]?(?:\.|\/))/i.test(name) ||
 /\.(pem|p12|pfx|key)$/i.test(name) ||
 ['LICENSE','AGENTS.md','docs/governance/M13_PLAN_FREEZE_2026-10-26.md','contracts/moonframe-m13-plan-freeze-v0.1.json'].includes(name);
const original = git('rev-parse','HEAD');
if (!dryRun && git('branch','--show-current') !== 'main') throw Error('This runner only works on existing main. Detached read-only dry-run is permitted for CI.');
if (changes().length) throw Error('Non-clean worktree. Preserve/checkpoint your current changes first.');
if (push) {
  const remote=git('remote','get-url','origin');
  if (!/^(https:\/\/github\.com\/bjo163\/moonframe(?:\.git)?|git@github\.com:bjo163\/moonframe\.git)$/i.test(remote)) throw Error('Refusing push to unexpected origin: '+remote);
}
say('Start '+original+'; push='+push+'; cycles='+(untilDone?'until convergence':cyclesMax));
if (dryRun) { say('DRY RUN '+JSON.stringify(countTasks())); stream.end(); process.exit(0); }
cmd('codex',['--version']);
cmd('node',['scripts/validate-contracts.mjs']);
cmd('node',['scripts/verify-m13-handoff.mjs']);
let stagnation=0, fatal=false, iteration=0;
const master=fs.readFileSync(path.join(root,'docs/handoff/CODEX_M13_AUTONOMOUS_MASTER_PROMPT.md'),'utf8');
while (iteration < cyclesMax) {
  iteration++;
  const before=countTasks();
  say('Cycle '+iteration+' '+JSON.stringify(before));
  if (before.pending<=0) break;
  const output=path.join(logDir,'last-'+iteration+'.txt');
  const prompt=master+'\n\nRUNNER-OVERRIDE: Complete exactly ONE dependency-ready task this invocation, or record an objective blocker. Update its correct status/evidence. Do not run package-manager commands (pnpm/npm/yarn), test suites, typecheck, or builds; the host runner performs all applicable verification after this invocation and preserves changes if a check fails. Do not commit or push: the host runner handles that after testing. End with M13_RESULT_JSON and return for next cycle. Never ask user a routine question.';
  const exit=await new Promise(resolve=>{
    const p=spawn('codex',['exec','-c','approval_policy="never"','--sandbox','workspace-write','--ephemeral','--output-last-message',output,'-'],{cwd:root,env:{...process.env,CI:'1'},stdio:['pipe','pipe','pipe']});
    p.stdin.end(prompt);
    p.stdout.on('data',data=>{process.stdout.write(data);stream.write(data);});
    p.stderr.on('data',data=>{process.stderr.write(data);stream.write(data);});
    p.on('error',e=>{say('Codex error: '+e.message);resolve(127);});
    p.on('close',code=>resolve(code??127));
  });
  const last=fs.existsSync(output)?fs.readFileSync(output,'utf8'):'';
  const json=last.match(/M13_RESULT_JSON:\s*(\{[^\n]+\})/);
  let result={status:'unknown',taskId:'none'};
  if (json) try {result=JSON.parse(json[1]);} catch {}
  say('Result '+JSON.stringify({exit,status:result.status,id:result.taskId}));
  const changed=changes();
  if (!changed.length) {
    stagnation++;
    if (result.status==='blocked'||result.status==='complete'||stagnation>=3) {say('No further safe progress; stop to avoid infinite cost.');break;}
    continue;
  }
  if (changed.some(forbidden)) {say('STOP: protected/sensitive paths edited: '+changed.filter(forbidden).join(', '));fatal=true;break;}
  const tests=[
    ['node',['scripts/validate-contracts.mjs']],
    ['node',['scripts/verify-m13-handoff.mjs']],
    ['pnpm',['test']],
    ['pnpm',['run','typecheck']],
    ['pnpm',['run','build']],
  ];
  if (changed.some(f=>/^(src\/|apps\/|tests\/browser\/|playwright\.config|contracts\/moonframe-(theme|skin|motion|sfx|token|visual|asset|consumer|creative))/.test(f))) tests.push(['pnpm',['run','test:browser']]);
  let passed=true;
  for (const [exe,argv] of tests) {
    say('Verify '+exe+' '+argv.join(' '));
    const r=cmd(exe,argv,false);
    stream.write((r.stdout||'').slice(-4500)+'\n'+(r.stderr||'').slice(-4500)+'\n');
    if (r.status!==0) {say('FAILED '+exe+' exit='+r.status+'; preserving uncommitted patch');passed=false;break;}
  }
  if (!passed) {fatal=true;break;}
  cmd('git',['add','--',...changed]);
  cmd('git',['diff','--cached','--check']);
  const id=/^MF-(VF|PF)-\d{3}$/.test(result.taskId||'')?result.taskId:'task';
  const message=String(result.summary||'verified autonomous microtask').replace(/[\r\n]/g,' ').slice(0,70);
  cmd('git',['commit','-m','chore(m13): '+id+' '+message]);
  const sha=git('rev-parse','HEAD');
  say('Committed '+sha);
  if (push) {
    const r=cmd('git',['push','origin','HEAD:refs/heads/main'],false);
    if (r.status!==0) {say('Push rejected/unavailable; local commit retained, no force: '+(r.stderr||'').slice(-800));fatal=true;break;}
    say('Pushed main fast-forward '+sha);
  }
  stagnation=0;
  const after=countTasks();
  if (after.total!==488) {say('STOP: expected 488 unique IDs; got '+after.total);fatal=true;break;}
  if (after.pending===0) {say('All nonblocked records terminal; external approvals remain separate.');break;}
}
say('Final '+JSON.stringify({iteration,head:git('rev-parse','HEAD'),counts:countTasks(),fatal,logfile}));
stream.end();
process.exitCode=fatal?1:0;
