import { test, expect } from 'playwright/test';

test(" Keyboard ", async ({ page }) => {

    await page.goto("https://keycode.info");
    await page.keyboard.press('A');
    await page.screenshot({ path: 'A.png' });
    await page.keyboard.press('ArrowLeft');
    await page.screenshot({ path: 'Arrow.png' });
    await page.keyboard.press('Shift+0');
    await page.screenshot({ path: 'Shift.png' });
    await page.keyboard.up('Shift');
    await page.keyboard.down('Shift');


});