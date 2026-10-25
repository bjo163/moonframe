import { test, expect } from '@playwright/test';
import { skins } from '../../src/skins.js';
import fs from 'node:fs';
import path from 'node:path';

const captureDir = path.resolve('artifacts/skins');
fs.mkdirSync(captureDir, {recursive:true});

for (const skin of skins) for (const mode of ['light','dark']) {
  test(`${skin.id} ${mode}: rendered, contrast, responsive and RTL`, async ({page}) => {
    const errors=[]; page.on('pageerror', e=>errors.push(e.message));
    await page.goto('/');
    await page.getByRole('button', {name: skin.name, exact:false}).filter({has:page.locator('.demo-swatch')}).click();
    await page.getByLabel('Appearance', {exact:true}).selectOption(mode);
    const root=page.locator('.mf-root');
    await expect(root).toHaveAttribute('data-skin',skin.id);
    await expect(root).toHaveAttribute('data-mode',mode);
    await expect(page.getByRole('heading',{level:1})).toBeVisible();
    const contrast = await root.evaluate(node => {
      const style=getComputedStyle(node);
      const rgb = token => {
        const probe=document.createElement('span');probe.style.color=style.getPropertyValue(token);node.append(probe);
        const channels=getComputedStyle(probe).color.match(/[\d.]+/g).slice(0,3).map(Number);probe.remove();
        const linear=channels.map(v=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4;});
        return .2126*linear[0]+.7152*linear[1]+.0722*linear[2];
      };
      const ratio=(a,b)=>{const x=rgb(a),y=rgb(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05);};
      return { text:ratio('--mf-text','--mf-bg'), surface:ratio('--mf-text','--mf-surface'), muted:ratio('--mf-muted','--mf-surface'), raised:ratio('--mf-muted','--mf-surface-raised'), action:ratio('--mf-accent-text','--mf-accent') };
    });
    for(const [role,ratio] of Object.entries(contrast)) expect(ratio,`${skin.id}/${mode} ${role} contrast`).toBeGreaterThanOrEqual(4.5);
    await page.screenshot({path:path.join(captureDir,`${skin.id}-${mode}.png`),fullPage:true,animations:'disabled'});
    await page.setViewportSize({width:360,height:800});
    await expect(page.getByRole('heading',{level:1})).toBeVisible();
    expect(await page.evaluate(()=>document.documentElement.scrollWidth <= window.innerWidth+1),'No horizontal page overflow at 360px').toBe(true);
    await page.getByLabel('Direction',{exact:true}).selectOption('rtl');
    await expect(page.locator('html')).toHaveAttribute('dir','rtl');
    expect(await page.evaluate(()=>document.documentElement.scrollWidth <= window.innerWidth+1),'No RTL page overflow').toBe(true);
    expect(errors).toEqual([]);
  });
}

test('system mode follows OS, manual choice persists, unavailable storage is safe', async ({page}) => {
  await page.emulateMedia({colorScheme:'dark',reducedMotion:'reduce'});
  await page.goto('/');
  await page.getByLabel('Appearance',{exact:true}).selectOption('system');
  await expect(page.locator('.mf-root')).toHaveAttribute('data-mode','dark');
  await expect(page.locator('.mf-root')).toHaveAttribute('data-motion','reduced');
  await page.emulateMedia({colorScheme:'light'});
  await expect(page.locator('.mf-root')).toHaveAttribute('data-mode','light');
  await page.getByLabel('Appearance',{exact:true}).selectOption('dark');
  await page.reload();
  await expect(page.locator('.mf-root')).toHaveAttribute('data-mode','dark');
  await page.addInitScript(()=>{Object.defineProperty(window,'localStorage',{get(){throw new Error('Storage unavailable');}});});
  await page.reload();
  await expect(page.getByRole('heading',{level:1})).toBeVisible();
  await page.getByLabel('Appearance',{exact:true}).selectOption('light');
  await expect(page.locator('.mf-root')).toHaveAttribute('data-mode','light');
});

test('forced colors retains controls and theme contrast is independently selectable', async ({page})=>{
  await page.emulateMedia({forcedColors:'active'});
  await page.goto('/');
  await page.getByLabel('Contrast',{exact:true}).selectOption('high');
  await expect(page.locator('.mf-root')).toHaveAttribute('data-contrast','high');
  await expect(page.getByLabel('Appearance',{exact:true})).toBeVisible();
  await page.getByLabel('Density',{exact:true}).selectOption('compact');
  await expect(page.locator('.mf-root')).toHaveAttribute('data-density','compact');
});
