# Frozen loading, empty, error, and denied states (MF-VF-278)

**Status:** `captured-structural`; **human visual reviewer:** `pending`. This freezes four explicit request states and their available actions across 15 skins × light/dark mode. The fixture is local and deterministic: it does not contact a service, create a project, or send an access request. It does not claim pixel parity or human approval.

## Frozen state contract

Source of truth: `apps/moonframe/app/(lab)/lab/behavior/page.tsx`; browser assertions and capture generation: `tests/browser/components.spec.js`. Route: `/lab/behavior?fixture=states`.

| State | Frozen content | Action and local result |
|---|---|---|
| Loading | “Loading projects”; live status “Fetching the latest workspace projects…”; two decorative placeholders; busy state | **Cancel request** switches the preview to Empty. |
| Empty | “No projects yet”; “Create a project to give your next idea a home.” | **Create project** shows “Create project preview opened; no project was created.” No project is created. |
| Error | Alert “Projects could not load”; “The workspace service did not respond. Your work has not changed.” | **Try again** switches the preview to Loading. |
| Denied | Alert “You do not have access to these projects”; “Ask a workspace administrator to review your permissions.” | **Request access** shows “Access request prepared locally; nothing was sent.” |

The state chooser updates only the visible local fixture. Browser checks assert each state message/ARIA, action availability, and the Cancel, Create, Retry, and Request access outcomes for all 30 skin/mode combinations.

## Capture matrix

Each state has its own screenshot: **120 total captures** (4 states × 15 skins × 2 modes), full-page at 1440×960 CSS px and fixed time 2026-10-25T12:00:00Z. Sidecars record the exact route/state, fixture, loaded fonts, source fingerprint/commit, browser, locale/timezone and PNG digest. PNGs and sidecars are ignored local artifacts; regenerate with `pnpm run test:browser`.

### Loading capture set

| Skin | Mode | loading screenshot | PNG SHA-256 | Capture source commit |
|---|---|---|---|---|
| moonpunk | light | [moonpunk-light-1440x960-state-loading.png](../../../artifacts/skins/moonpunk-light-1440x960-state-loading.png) | `d0657837708877774a6c971d79261580d7d7678692138f9dc03649c47343ca46` | `a2baccb89d90` |
| moonpunk | dark | [moonpunk-dark-1440x960-state-loading.png](../../../artifacts/skins/moonpunk-dark-1440x960-state-loading.png) | `e2be0f476b90dbe4336e334f553b8c3e4fd68e50b72455149d3c02a5a5cda94c` | `a2baccb89d90` |
| moonriot | light | [moonriot-light-1440x960-state-loading.png](../../../artifacts/skins/moonriot-light-1440x960-state-loading.png) | `f60e116624c6ef566291aced66ff85488387bef936847bd70b32804317ef3b4d` | `a2baccb89d90` |
| moonriot | dark | [moonriot-dark-1440x960-state-loading.png](../../../artifacts/skins/moonriot-dark-1440x960-state-loading.png) | `abc8f4692f1ed470b538f913edfb6e2014c99dd71440f0acde7b82ecfa3a6b87` | `a2baccb89d90` |
| moonzine | light | [moonzine-light-1440x960-state-loading.png](../../../artifacts/skins/moonzine-light-1440x960-state-loading.png) | `14e3b56bcf90a2e6b536972c83a8689f5ead19d3805e9ed29fcf33566e87a72f` | `a2baccb89d90` |
| moonzine | dark | [moonzine-dark-1440x960-state-loading.png](../../../artifacts/skins/moonzine-dark-1440x960-state-loading.png) | `f7b238b41fa1177108820bde6f3bb8c92c46cbe20b3ce9283ff01572dbd4d8e1` | `a2baccb89d90` |
| moonhalftone | light | [moonhalftone-light-1440x960-state-loading.png](../../../artifacts/skins/moonhalftone-light-1440x960-state-loading.png) | `be3bd638ce4d0872f7b1f1ab03b384a6bb728cb2629fdf878d7965c4d8bdddda` | `a2baccb89d90` |
| moonhalftone | dark | [moonhalftone-dark-1440x960-state-loading.png](../../../artifacts/skins/moonhalftone-dark-1440x960-state-loading.png) | `8f45bfe6bfda99bd0f434e8747d4cd4b1b5d2a7837cf7881a0fcd3c2c69b9db9` | `a2baccb89d90` |
| moonglitch | light | [moonglitch-light-1440x960-state-loading.png](../../../artifacts/skins/moonglitch-light-1440x960-state-loading.png) | `be035573f2d8bf4028f970cbe5274ceb8ada65acef45621783d362cd63152016` | `a2baccb89d90` |
| moonglitch | dark | [moonglitch-dark-1440x960-state-loading.png](../../../artifacts/skins/moonglitch-dark-1440x960-state-loading.png) | `b7cfbaa95cbde2920ce8beee5f3e94b033134fb7156cecb0715eb56b8b2abef8` | `a2baccb89d90` |
| moonsmash | light | [moonsmash-light-1440x960-state-loading.png](../../../artifacts/skins/moonsmash-light-1440x960-state-loading.png) | `c0de7317d7e463817462f3e17f042aa33a9363775f57c91a53bc4f7319455974` | `a2baccb89d90` |
| moonsmash | dark | [moonsmash-dark-1440x960-state-loading.png](../../../artifacts/skins/moonsmash-dark-1440x960-state-loading.png) | `e6aea027bfc6b48e4414bdd5b794d7b873e39aa57950ae350948c86eefce304f` | `a2baccb89d90` |
| moonink | light | [moonink-light-1440x960-state-loading.png](../../../artifacts/skins/moonink-light-1440x960-state-loading.png) | `9e7f93da9dbc7cdbe0809fdc58d41198f3d6b3c80b9fe3018aea60ce0f08a82f` | `a2baccb89d90` |
| moonink | dark | [moonink-dark-1440x960-state-loading.png](../../../artifacts/skins/moonink-dark-1440x960-state-loading.png) | `28210fe928ad545779fbe380a0df2274007895c4a7fd17b5db5123be3323fb30` | `a2baccb89d90` |
| mooncrash | light | [mooncrash-light-1440x960-state-loading.png](../../../artifacts/skins/mooncrash-light-1440x960-state-loading.png) | `0934abf55c9e10f08f52995667709b59bf3bbd29a3d17e28ea09e1fb6cef8b42` | `a2baccb89d90` |
| mooncrash | dark | [mooncrash-dark-1440x960-state-loading.png](../../../artifacts/skins/mooncrash-dark-1440x960-state-loading.png) | `597f02cc7d899da21d97584461c5a06d2a3958342f19f570c32e268ae7fd45b2` | `a2baccb89d90` |
| moonpanel | light | [moonpanel-light-1440x960-state-loading.png](../../../artifacts/skins/moonpanel-light-1440x960-state-loading.png) | `d5c888912c128a99f1ead423f245751f5f770dec131b1185474da617acfeeab8` | `a2baccb89d90` |
| moonpanel | dark | [moonpanel-dark-1440x960-state-loading.png](../../../artifacts/skins/moonpanel-dark-1440x960-state-loading.png) | `b7aad11c8662cfdad8426830128d3765e6e91e6be4b53e2f2703972b45b0c98e` | `a2baccb89d90` |
| moonscrawl | light | [moonscrawl-light-1440x960-state-loading.png](../../../artifacts/skins/moonscrawl-light-1440x960-state-loading.png) | `5f2c64899557355a163b4864bc2ba8c4fafcde5c8a9b1f4def6c0df4f8a8ed5f` | `a2baccb89d90` |
| moonscrawl | dark | [moonscrawl-dark-1440x960-state-loading.png](../../../artifacts/skins/moonscrawl-dark-1440x960-state-loading.png) | `76c10aa3bd63ca2f452e96810fde33b5ef4306a74d9bf2900aa24dd0bc8080a9` | `a2baccb89d90` |
| moonraw | light | [moonraw-light-1440x960-state-loading.png](../../../artifacts/skins/moonraw-light-1440x960-state-loading.png) | `2aff4ddabae09a83c671f5b387bfd3e1c1fd2930dc92ad08eeb7d426cd105dd8` | `a2baccb89d90` |
| moonraw | dark | [moonraw-dark-1440x960-state-loading.png](../../../artifacts/skins/moonraw-dark-1440x960-state-loading.png) | `09226124e74e51e4d2fd1a474bf93d9213ce06b71a3b22384b072057e348b619` | `a2baccb89d90` |
| moonchrome | light | [moonchrome-light-1440x960-state-loading.png](../../../artifacts/skins/moonchrome-light-1440x960-state-loading.png) | `0ef820d22d9acc6e0863c87b22c3039eabdce555f3969622d2f933c46592339c` | `a2baccb89d90` |
| moonchrome | dark | [moonchrome-dark-1440x960-state-loading.png](../../../artifacts/skins/moonchrome-dark-1440x960-state-loading.png) | `4b32d82d771fcbe7dee3918b6c4933a6592e69904af452672e364dcbe5e822ad` | `a2baccb89d90` |
| classic | light | [classic-light-1440x960-state-loading.png](../../../artifacts/skins/classic-light-1440x960-state-loading.png) | `a7cfda0ae742ef989ff81cd2b205ae5af0660c587642b9a704eb572b1bcf55de` | `a2baccb89d90` |
| classic | dark | [classic-dark-1440x960-state-loading.png](../../../artifacts/skins/classic-dark-1440x960-state-loading.png) | `f22573af4ad30029eef24579f4e43ea0131be6a6f09efd0d8ee714e611530ad2` | `a2baccb89d90` |
| moonquest | light | [moonquest-light-1440x960-state-loading.png](../../../artifacts/skins/moonquest-light-1440x960-state-loading.png) | `01a124be136eb2d47123dcfe7ba2ba1ebbe4fd37f250176bc2ed7aeb9699afbc` | `a2baccb89d90` |
| moonquest | dark | [moonquest-dark-1440x960-state-loading.png](../../../artifacts/skins/moonquest-dark-1440x960-state-loading.png) | `0bc55ae04b2e1da8d307c44399266c3598a9b90fd93116c5b49818058506ba97` | `a2baccb89d90` |
| moonledger | light | [moonledger-light-1440x960-state-loading.png](../../../artifacts/skins/moonledger-light-1440x960-state-loading.png) | `b42c30a2ccc7d73943b7de3ddfc7480ef1d9fad3801a2c1429b4199bc3732b86` | `a2baccb89d90` |
| moonledger | dark | [moonledger-dark-1440x960-state-loading.png](../../../artifacts/skins/moonledger-dark-1440x960-state-loading.png) | `b34421559fb8c7048326829a8b2aeca97f816454e8dfa2fb8b2b4a89f889be5b` | `a2baccb89d90` |

### Empty capture set

| Skin | Mode | empty screenshot | PNG SHA-256 | Capture source commit |
|---|---|---|---|---|
| moonpunk | light | [moonpunk-light-1440x960-state-empty.png](../../../artifacts/skins/moonpunk-light-1440x960-state-empty.png) | `1d55dedfd61ef4b9f4c9b6345e9d43c2ad37f16e9e1d2af0e4c165eefb8a5ed2` | `a2baccb89d90` |
| moonpunk | dark | [moonpunk-dark-1440x960-state-empty.png](../../../artifacts/skins/moonpunk-dark-1440x960-state-empty.png) | `a6a11cd46574c8f8529f5254cf8f4fae5b79a7e367183a80e92352df6f3f70d5` | `a2baccb89d90` |
| moonriot | light | [moonriot-light-1440x960-state-empty.png](../../../artifacts/skins/moonriot-light-1440x960-state-empty.png) | `e66245dcf00550e5e9f605b8a04770ae7b644559d8a766abbbf4f6ee19b9bbce` | `a2baccb89d90` |
| moonriot | dark | [moonriot-dark-1440x960-state-empty.png](../../../artifacts/skins/moonriot-dark-1440x960-state-empty.png) | `ce6fcc8bbfcb200108ef066bcf156cb38add5f321e5242e72c39a5e0c76b6232` | `a2baccb89d90` |
| moonzine | light | [moonzine-light-1440x960-state-empty.png](../../../artifacts/skins/moonzine-light-1440x960-state-empty.png) | `aa6c33eed8168b89ea99209265893d1845ff0ab7321e129844e0fa4bec7fd15c` | `a2baccb89d90` |
| moonzine | dark | [moonzine-dark-1440x960-state-empty.png](../../../artifacts/skins/moonzine-dark-1440x960-state-empty.png) | `a53dab9fc40c87c991c372077b303b277911513871cad26aee445ae042b40369` | `a2baccb89d90` |
| moonhalftone | light | [moonhalftone-light-1440x960-state-empty.png](../../../artifacts/skins/moonhalftone-light-1440x960-state-empty.png) | `f2519b65b02d81efa0a81cf974a95fdefcf0ea08508e6def3dccb6ad98937fb1` | `a2baccb89d90` |
| moonhalftone | dark | [moonhalftone-dark-1440x960-state-empty.png](../../../artifacts/skins/moonhalftone-dark-1440x960-state-empty.png) | `9a3c59ae3ecd9ae36ee2019f85a425f590e9dff14710ad94a643dab60e27891f` | `a2baccb89d90` |
| moonglitch | light | [moonglitch-light-1440x960-state-empty.png](../../../artifacts/skins/moonglitch-light-1440x960-state-empty.png) | `50acf6ae814aae280fd1962c0b0e1b1b46be0b191b66ce0f15c8073c1add7496` | `a2baccb89d90` |
| moonglitch | dark | [moonglitch-dark-1440x960-state-empty.png](../../../artifacts/skins/moonglitch-dark-1440x960-state-empty.png) | `6efe33116d99effcc5465154fddc254d6c6d8a4f2959ed4243272f443bfaa28d` | `a2baccb89d90` |
| moonsmash | light | [moonsmash-light-1440x960-state-empty.png](../../../artifacts/skins/moonsmash-light-1440x960-state-empty.png) | `90e1d4c5976b67ef1ffbcfd7bac86bf143cf2beafcde1cd3c947edb8acbe6932` | `a2baccb89d90` |
| moonsmash | dark | [moonsmash-dark-1440x960-state-empty.png](../../../artifacts/skins/moonsmash-dark-1440x960-state-empty.png) | `a35f1570957c68ec88ab7dcc05fa8f7e989316c301c70b319f4ae49981ba1a8e` | `a2baccb89d90` |
| moonink | light | [moonink-light-1440x960-state-empty.png](../../../artifacts/skins/moonink-light-1440x960-state-empty.png) | `4835a0cd765f3c3a14185be9fc5b73c377d436f7c68c863134c0b11beb34e39a` | `a2baccb89d90` |
| moonink | dark | [moonink-dark-1440x960-state-empty.png](../../../artifacts/skins/moonink-dark-1440x960-state-empty.png) | `f38cbafa5d31c44fafe4490d9933b138139fa2604283512765d1c6f0239082cf` | `a2baccb89d90` |
| mooncrash | light | [mooncrash-light-1440x960-state-empty.png](../../../artifacts/skins/mooncrash-light-1440x960-state-empty.png) | `6d7c589a6ef274d32bb601506c1f956220860511024bd5837db8d82a977cd00e` | `a2baccb89d90` |
| mooncrash | dark | [mooncrash-dark-1440x960-state-empty.png](../../../artifacts/skins/mooncrash-dark-1440x960-state-empty.png) | `3ca6613d15a5e3416d49605043a24163edf6b33ab573a746d87c0f3013107b43` | `a2baccb89d90` |
| moonpanel | light | [moonpanel-light-1440x960-state-empty.png](../../../artifacts/skins/moonpanel-light-1440x960-state-empty.png) | `bad05263dec2b516267735c36b093d4b0b55f55f1c5571bc170d0090764a8c69` | `a2baccb89d90` |
| moonpanel | dark | [moonpanel-dark-1440x960-state-empty.png](../../../artifacts/skins/moonpanel-dark-1440x960-state-empty.png) | `24e769b6281f787d0e5be1b22bf9f2bac751ffcc20777bfc74e3a6faa3303b24` | `a2baccb89d90` |
| moonscrawl | light | [moonscrawl-light-1440x960-state-empty.png](../../../artifacts/skins/moonscrawl-light-1440x960-state-empty.png) | `a8914c82c381e65c7504a6df4d85a4958925ac161c6a852cb3f7fecf1abe9918` | `a2baccb89d90` |
| moonscrawl | dark | [moonscrawl-dark-1440x960-state-empty.png](../../../artifacts/skins/moonscrawl-dark-1440x960-state-empty.png) | `20971a3ee9692d5beecd1300d40cc43afcd222f54772ebbaa23cec0cf048033d` | `a2baccb89d90` |
| moonraw | light | [moonraw-light-1440x960-state-empty.png](../../../artifacts/skins/moonraw-light-1440x960-state-empty.png) | `e9ed06b994692554144103e9448797f8d3831d663b5d45b931b18f818c07ccfd` | `a2baccb89d90` |
| moonraw | dark | [moonraw-dark-1440x960-state-empty.png](../../../artifacts/skins/moonraw-dark-1440x960-state-empty.png) | `bf2e39eaa3725404879496b2c22c325da18f8bf9cf60fbf3bf6e50ffb024c94c` | `a2baccb89d90` |
| moonchrome | light | [moonchrome-light-1440x960-state-empty.png](../../../artifacts/skins/moonchrome-light-1440x960-state-empty.png) | `615cb17e5900b4b68b316783471e2ec7ea36a7e54a6ca699f2507bf5ef96b958` | `a2baccb89d90` |
| moonchrome | dark | [moonchrome-dark-1440x960-state-empty.png](../../../artifacts/skins/moonchrome-dark-1440x960-state-empty.png) | `d00f3b5a5013b0135be9afbbf1d812ed0e6a91adab62207f9d56c45757bd9b3f` | `a2baccb89d90` |
| classic | light | [classic-light-1440x960-state-empty.png](../../../artifacts/skins/classic-light-1440x960-state-empty.png) | `0da56000610619481314c4e0025a73c4b1eca9c6c8a6b51a2274db7d174d8231` | `a2baccb89d90` |
| classic | dark | [classic-dark-1440x960-state-empty.png](../../../artifacts/skins/classic-dark-1440x960-state-empty.png) | `9de0b6520838088870b48bd5d90b44ba5ce878329fbded379dc312205170ace7` | `a2baccb89d90` |
| moonquest | light | [moonquest-light-1440x960-state-empty.png](../../../artifacts/skins/moonquest-light-1440x960-state-empty.png) | `09d687e43d8f416d4773dd99d2a44c41fd6af2ef88eb8549891c0a5508034efd` | `a2baccb89d90` |
| moonquest | dark | [moonquest-dark-1440x960-state-empty.png](../../../artifacts/skins/moonquest-dark-1440x960-state-empty.png) | `2b033e19627d9c2e3e0ad7ff065548353c03479c84bd58db6a3d7482c0fde790` | `a2baccb89d90` |
| moonledger | light | [moonledger-light-1440x960-state-empty.png](../../../artifacts/skins/moonledger-light-1440x960-state-empty.png) | `f5d752fcff351ae9dcf1bc2a9fb4f209fe1770ca107b4825f0f25efd2032b1de` | `a2baccb89d90` |
| moonledger | dark | [moonledger-dark-1440x960-state-empty.png](../../../artifacts/skins/moonledger-dark-1440x960-state-empty.png) | `4cb05e2012335e8919b00c3aafe9d01c8252ec9aa88b3dd6ec5df54e49acfe26` | `a2baccb89d90` |

### Error capture set

| Skin | Mode | error screenshot | PNG SHA-256 | Capture source commit |
|---|---|---|---|---|
| moonpunk | light | [moonpunk-light-1440x960-state-error.png](../../../artifacts/skins/moonpunk-light-1440x960-state-error.png) | `653bbc840b1fe7ca1a3164987ce1bcbddaf3e9849f9a8f6b55b650b31251c467` | `a2baccb89d90` |
| moonpunk | dark | [moonpunk-dark-1440x960-state-error.png](../../../artifacts/skins/moonpunk-dark-1440x960-state-error.png) | `d8d8cc3ecbcbde0613e498eae3480527a4ae7a17bb97926fd37822cfe4748cb9` | `a2baccb89d90` |
| moonriot | light | [moonriot-light-1440x960-state-error.png](../../../artifacts/skins/moonriot-light-1440x960-state-error.png) | `57d3eef9ea08462cecc29d2e979f02d70456f3a2bb8282f29faf4a40312d2518` | `a2baccb89d90` |
| moonriot | dark | [moonriot-dark-1440x960-state-error.png](../../../artifacts/skins/moonriot-dark-1440x960-state-error.png) | `2913a78ee8fc2df2917f4b24af44ef5cff7166254d84604ca92c2ca699c69060` | `a2baccb89d90` |
| moonzine | light | [moonzine-light-1440x960-state-error.png](../../../artifacts/skins/moonzine-light-1440x960-state-error.png) | `dab32b455ddfaa3a7d4b39d237e722f3fa73933d64886ca29fa72f8327a0b25f` | `a2baccb89d90` |
| moonzine | dark | [moonzine-dark-1440x960-state-error.png](../../../artifacts/skins/moonzine-dark-1440x960-state-error.png) | `9d3026c3789157c4699112d9c1a4a082c3cf6facbf1dac5577cf1d0a5206fafa` | `a2baccb89d90` |
| moonhalftone | light | [moonhalftone-light-1440x960-state-error.png](../../../artifacts/skins/moonhalftone-light-1440x960-state-error.png) | `09b77e19d384c75cd48d062f86ae99ed8d0d088da8987ef4c2b0a4047f51b34f` | `a2baccb89d90` |
| moonhalftone | dark | [moonhalftone-dark-1440x960-state-error.png](../../../artifacts/skins/moonhalftone-dark-1440x960-state-error.png) | `0c3252bba814df25a32ac67a04e049fe66d7676089d653ed1a4d72029c153e99` | `a2baccb89d90` |
| moonglitch | light | [moonglitch-light-1440x960-state-error.png](../../../artifacts/skins/moonglitch-light-1440x960-state-error.png) | `abcfe50a78358630786ff6f36357cf12117ae9fddb3fc09f683f0dd1f2e69372` | `a2baccb89d90` |
| moonglitch | dark | [moonglitch-dark-1440x960-state-error.png](../../../artifacts/skins/moonglitch-dark-1440x960-state-error.png) | `dfa9e0847bc52e2d0fa2bb162b44c26aafe9b76291042338afb65581d603bacd` | `a2baccb89d90` |
| moonsmash | light | [moonsmash-light-1440x960-state-error.png](../../../artifacts/skins/moonsmash-light-1440x960-state-error.png) | `a1ed7a9206529edd6d32b8ff2a757c5237ad1ae5ef683bcd64d2a68c9f592ec5` | `a2baccb89d90` |
| moonsmash | dark | [moonsmash-dark-1440x960-state-error.png](../../../artifacts/skins/moonsmash-dark-1440x960-state-error.png) | `e57f7a6f1f6a2e37ba0cac44f6f057960ed17b523d864a4746a1dfeafcee2935` | `a2baccb89d90` |
| moonink | light | [moonink-light-1440x960-state-error.png](../../../artifacts/skins/moonink-light-1440x960-state-error.png) | `0bdb06636870fcf7f83c77c7661bb3a2842462f98594ecabcafb0f7a56b961ab` | `a2baccb89d90` |
| moonink | dark | [moonink-dark-1440x960-state-error.png](../../../artifacts/skins/moonink-dark-1440x960-state-error.png) | `ab2dbe1ed3778ffc47f51b300b9c88df8ef5d3eff80bb627c49d492a08fd1b16` | `a2baccb89d90` |
| mooncrash | light | [mooncrash-light-1440x960-state-error.png](../../../artifacts/skins/mooncrash-light-1440x960-state-error.png) | `d6aced7d2535f5ae7e3febbb550f73a4a47a01aee4741d531dca73d3213842e5` | `a2baccb89d90` |
| mooncrash | dark | [mooncrash-dark-1440x960-state-error.png](../../../artifacts/skins/mooncrash-dark-1440x960-state-error.png) | `0d0eb20b34b356e677ce904f8e8982da25d77413e262d29bc0d2784d53641d94` | `a2baccb89d90` |
| moonpanel | light | [moonpanel-light-1440x960-state-error.png](../../../artifacts/skins/moonpanel-light-1440x960-state-error.png) | `606d3502362f71545f0f2cc4af9d7c9157b1dc8ebc2819b4f2bb45a051209d29` | `a2baccb89d90` |
| moonpanel | dark | [moonpanel-dark-1440x960-state-error.png](../../../artifacts/skins/moonpanel-dark-1440x960-state-error.png) | `1c5c0619060613e7512fca42f783ff8af6c466a837dab797e34e334a485cdad9` | `a2baccb89d90` |
| moonscrawl | light | [moonscrawl-light-1440x960-state-error.png](../../../artifacts/skins/moonscrawl-light-1440x960-state-error.png) | `04e488b9a2360106e2648f8a6c9ae2c17708cd5ef39c9b31ddf0e9280ac513a6` | `a2baccb89d90` |
| moonscrawl | dark | [moonscrawl-dark-1440x960-state-error.png](../../../artifacts/skins/moonscrawl-dark-1440x960-state-error.png) | `55d4ca2a59ef49f305dbda97b67cf2db0c4b448e3808142fa63e50a33fc76d56` | `a2baccb89d90` |
| moonraw | light | [moonraw-light-1440x960-state-error.png](../../../artifacts/skins/moonraw-light-1440x960-state-error.png) | `8e4e3b039c2f704719f953699653de42099cbe7873cba5545c6aa00ec84c1620` | `a2baccb89d90` |
| moonraw | dark | [moonraw-dark-1440x960-state-error.png](../../../artifacts/skins/moonraw-dark-1440x960-state-error.png) | `59d2a285d59036c8d425311cf9b5d8205ab676638bdc329ec26f0c5fdc2ef769` | `a2baccb89d90` |
| moonchrome | light | [moonchrome-light-1440x960-state-error.png](../../../artifacts/skins/moonchrome-light-1440x960-state-error.png) | `305663352b206ee8cdf2fb1958a640f04355fda57493c2b5d2ef891a960be971` | `a2baccb89d90` |
| moonchrome | dark | [moonchrome-dark-1440x960-state-error.png](../../../artifacts/skins/moonchrome-dark-1440x960-state-error.png) | `3afe80537f80e73af5d330957863beef88152758c581e31f9f193b3618e248c8` | `a2baccb89d90` |
| classic | light | [classic-light-1440x960-state-error.png](../../../artifacts/skins/classic-light-1440x960-state-error.png) | `d4016422cbf87a450309b9398231a507971bfb830718725669b90c35b82f8edc` | `a2baccb89d90` |
| classic | dark | [classic-dark-1440x960-state-error.png](../../../artifacts/skins/classic-dark-1440x960-state-error.png) | `8569cf8217bbe73d4990dad27a110e3b75a7377fafb7bc272ebc4316d416c136` | `a2baccb89d90` |
| moonquest | light | [moonquest-light-1440x960-state-error.png](../../../artifacts/skins/moonquest-light-1440x960-state-error.png) | `4ede45844de6cd651aa8de822b98e3fb52146d79f6866090c381977d18641b4d` | `a2baccb89d90` |
| moonquest | dark | [moonquest-dark-1440x960-state-error.png](../../../artifacts/skins/moonquest-dark-1440x960-state-error.png) | `c25b43cd2514db03ddeedd6b40a66edcea6e9abfcf2b14578ed2e7cb44af92a3` | `a2baccb89d90` |
| moonledger | light | [moonledger-light-1440x960-state-error.png](../../../artifacts/skins/moonledger-light-1440x960-state-error.png) | `c7b43aa540b85123a9366ce8f97e0b6c3b69cc61ecda8d8dfbdfc154ce1fe43b` | `a2baccb89d90` |
| moonledger | dark | [moonledger-dark-1440x960-state-error.png](../../../artifacts/skins/moonledger-dark-1440x960-state-error.png) | `830b617718b3158992a32808c24dc1380e0896142ffbd2ff15f423d06120c0d4` | `a2baccb89d90` |

### Denied capture set

| Skin | Mode | denied screenshot | PNG SHA-256 | Capture source commit |
|---|---|---|---|---|
| moonpunk | light | [moonpunk-light-1440x960-state-denied.png](../../../artifacts/skins/moonpunk-light-1440x960-state-denied.png) | `afb9b96ebb26a4eb0badb0cdc0099e2014ed268166ef80f0eeb375c526bea07a` | `a2baccb89d90` |
| moonpunk | dark | [moonpunk-dark-1440x960-state-denied.png](../../../artifacts/skins/moonpunk-dark-1440x960-state-denied.png) | `bc4245c1d4a81558b8bcefe8016a43da5eec449771b147ebda13e94cffb7a2e8` | `a2baccb89d90` |
| moonriot | light | [moonriot-light-1440x960-state-denied.png](../../../artifacts/skins/moonriot-light-1440x960-state-denied.png) | `744dc7a4def4c75d022ed17cd4868cdbfed27e1dfe5e53a00da087d406bc4dcb` | `a2baccb89d90` |
| moonriot | dark | [moonriot-dark-1440x960-state-denied.png](../../../artifacts/skins/moonriot-dark-1440x960-state-denied.png) | `4894e25e24c3c79369dfa75f174fbe8bd3036e5671106cd220e8ac1927cfadc1` | `a2baccb89d90` |
| moonzine | light | [moonzine-light-1440x960-state-denied.png](../../../artifacts/skins/moonzine-light-1440x960-state-denied.png) | `e60b45676309b9ee249e1dd4d86d02624f71ad2fc48d3eab0896a15a59585a65` | `a2baccb89d90` |
| moonzine | dark | [moonzine-dark-1440x960-state-denied.png](../../../artifacts/skins/moonzine-dark-1440x960-state-denied.png) | `758cf5596a1f6c8f38cf5de8ddd1080748986be8f683a9e37d70aca339f64756` | `a2baccb89d90` |
| moonhalftone | light | [moonhalftone-light-1440x960-state-denied.png](../../../artifacts/skins/moonhalftone-light-1440x960-state-denied.png) | `79cbe0d249a59fd11635c083dfdcaf61ff2d23f174578fe8a2050318fb2251a6` | `a2baccb89d90` |
| moonhalftone | dark | [moonhalftone-dark-1440x960-state-denied.png](../../../artifacts/skins/moonhalftone-dark-1440x960-state-denied.png) | `2638640cab1cf912b88722ae832fd9fa2aa2247b5eaed6094706d083d0b6f841` | `a2baccb89d90` |
| moonglitch | light | [moonglitch-light-1440x960-state-denied.png](../../../artifacts/skins/moonglitch-light-1440x960-state-denied.png) | `1a40e1817951fb813faff4b230ec5d248f51b1ec949bf4f81fd94b14715f5cc9` | `a2baccb89d90` |
| moonglitch | dark | [moonglitch-dark-1440x960-state-denied.png](../../../artifacts/skins/moonglitch-dark-1440x960-state-denied.png) | `88f6d2818b590410f12f3861b65a27275686fff03d0d31b81c29ede263a1b1b4` | `a2baccb89d90` |
| moonsmash | light | [moonsmash-light-1440x960-state-denied.png](../../../artifacts/skins/moonsmash-light-1440x960-state-denied.png) | `2f4192c554f6fb1fbdf6a397396a9191842a2eedcf921e4cb2e3ac04e05277e1` | `a2baccb89d90` |
| moonsmash | dark | [moonsmash-dark-1440x960-state-denied.png](../../../artifacts/skins/moonsmash-dark-1440x960-state-denied.png) | `37f76950b643783a4d9e99b4ade5bd8cabb9ec1af1b0401550e56772f04d41be` | `a2baccb89d90` |
| moonink | light | [moonink-light-1440x960-state-denied.png](../../../artifacts/skins/moonink-light-1440x960-state-denied.png) | `69e1a2f56ec8dcb37a155c690c5331f074ee411e9e91a06b4243ff0a901617b6` | `a2baccb89d90` |
| moonink | dark | [moonink-dark-1440x960-state-denied.png](../../../artifacts/skins/moonink-dark-1440x960-state-denied.png) | `5b42362d05e0f9ad1a6bd6a4fe7f82ff2c7f756642cd9cdb9d3bd7107677d584` | `a2baccb89d90` |
| mooncrash | light | [mooncrash-light-1440x960-state-denied.png](../../../artifacts/skins/mooncrash-light-1440x960-state-denied.png) | `0aa3a54a9c8e37dcf14bb9f96fc43f5e4640788d34dbf3be30c67f9400e3b28d` | `a2baccb89d90` |
| mooncrash | dark | [mooncrash-dark-1440x960-state-denied.png](../../../artifacts/skins/mooncrash-dark-1440x960-state-denied.png) | `e5b3e1932c30e86fc889e888072a07d09a3e136552d03ac632591e3835af03cd` | `a2baccb89d90` |
| moonpanel | light | [moonpanel-light-1440x960-state-denied.png](../../../artifacts/skins/moonpanel-light-1440x960-state-denied.png) | `d87b519a9eefe31b17aabceaeaebf1bbe1481a99d17781c271331bf5dd2d7bb4` | `a2baccb89d90` |
| moonpanel | dark | [moonpanel-dark-1440x960-state-denied.png](../../../artifacts/skins/moonpanel-dark-1440x960-state-denied.png) | `c522fa0be5178bb17b4a61929a443e5b067c309c1ba3060f49d9154517450d90` | `a2baccb89d90` |
| moonscrawl | light | [moonscrawl-light-1440x960-state-denied.png](../../../artifacts/skins/moonscrawl-light-1440x960-state-denied.png) | `7c0a65aab05adb2f7ae8d89ed690c986f5f83194ead8c104f178eede5ef0cd88` | `a2baccb89d90` |
| moonscrawl | dark | [moonscrawl-dark-1440x960-state-denied.png](../../../artifacts/skins/moonscrawl-dark-1440x960-state-denied.png) | `94cf52bad66cd7928c07a37b2f60a1a1cec7ef27672a86cec1582e2d68e1b406` | `a2baccb89d90` |
| moonraw | light | [moonraw-light-1440x960-state-denied.png](../../../artifacts/skins/moonraw-light-1440x960-state-denied.png) | `43883af9310917ca75d1619ffc36f77ecc4958eb4321c811db1bcfaa2b7552d5` | `a2baccb89d90` |
| moonraw | dark | [moonraw-dark-1440x960-state-denied.png](../../../artifacts/skins/moonraw-dark-1440x960-state-denied.png) | `7576a6dac4eb0946fdcaa4d20552947b3952db590fc2a01726b5d70942eac406` | `a2baccb89d90` |
| moonchrome | light | [moonchrome-light-1440x960-state-denied.png](../../../artifacts/skins/moonchrome-light-1440x960-state-denied.png) | `f714544fef8f161ded8a05c0df4e08ee9aa0551304047ab4aadc7470bc010ea6` | `a2baccb89d90` |
| moonchrome | dark | [moonchrome-dark-1440x960-state-denied.png](../../../artifacts/skins/moonchrome-dark-1440x960-state-denied.png) | `a0877cc6fd8377e0c5a0266d1f572acb492233ba00eb4f23e412293f034edeec` | `a2baccb89d90` |
| classic | light | [classic-light-1440x960-state-denied.png](../../../artifacts/skins/classic-light-1440x960-state-denied.png) | `a0fccb5415da72982f17805fbc0831970d4ad65c6591489c2d62d366e1750b89` | `a2baccb89d90` |
| classic | dark | [classic-dark-1440x960-state-denied.png](../../../artifacts/skins/classic-dark-1440x960-state-denied.png) | `338986556fade283b79065303b6d1a7f6c65f2c4cd09ff210f8af7a6a1406534` | `a2baccb89d90` |
| moonquest | light | [moonquest-light-1440x960-state-denied.png](../../../artifacts/skins/moonquest-light-1440x960-state-denied.png) | `414912e4925c68abed2ee6f6b0f9aac6da301bcfc52daead1750f3536f14c28d` | `a2baccb89d90` |
| moonquest | dark | [moonquest-dark-1440x960-state-denied.png](../../../artifacts/skins/moonquest-dark-1440x960-state-denied.png) | `b7bc68f29bd5dcdeca1be5a94d9a1b100a85628f7bfcdba1c11a42a83b8f5d85` | `a2baccb89d90` |
| moonledger | light | [moonledger-light-1440x960-state-denied.png](../../../artifacts/skins/moonledger-light-1440x960-state-denied.png) | `2aa0fdbc21722ca2961a00389ad7da9e4958c7d4c7056820d048e72d329a6538` | `a2baccb89d90` |
| moonledger | dark | [moonledger-dark-1440x960-state-denied.png](../../../artifacts/skins/moonledger-dark-1440x960-state-denied.png) | `ee6e2dacfa6e45318144cfe41a3a9fb93d1e37dc291ae8decd0dcf143fbca5e8` | `a2baccb89d90` |

## Verification and review

- `pnpm check` — passed: contract validation, 13/13 runtime tests, TypeScript and production build (88 routes).
- `pnpm run test:browser` — **61/61 passed**; the four-state matrix and its 120 captures passed at implementation/test commit `a2baccb89d904d628187899396b74c26fa8e2c3b`.
- Capture audit — **120/120** PNG hashes match sidecars; one source fingerprint/commit; each state has exactly 30 captures; all use the fixed state route, loaded fonts and 1440×960 viewport.
- `node scripts/validate-contracts.mjs`, `node scripts/verify-m13-handoff.mjs`, and `git diff --check` — passed; handoff retains existing SFX playback-truth and standalone LICENSE warnings.
- Human visual review: pending. Local preview copy is not a production service response.

Status is implemented as a frozen state/message/action contract; reviewer remains pending. Rollback: revert implementation and timeout commits plus the matching evidence/count commit.
