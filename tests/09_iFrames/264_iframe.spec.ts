import { test, expect, FrameLocator } from 'playwright/test';

test(" Frame Selectors  ", async ({ page }) => {
    await page.goto("https://selectorshub.com/iframe-scenario/");
    let iframe1: FrameLocator = page.frameLocator('#pact1').first();
    let iframe2 = iframe1.frameLocator('#pact2');
    let iframe3 = iframe2.frameLocator('#pact3');

    await iframe1.locator('#inp_val').fill('Michelle Obama');
    await iframe2.locator('#jex').fill('Deepika');
    await iframe3.locator('#glaf').fill('Playwright');


});