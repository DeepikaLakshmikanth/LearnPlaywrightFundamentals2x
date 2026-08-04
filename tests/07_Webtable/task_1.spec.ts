import { test, expect } from 'playwright/test';

test(" Verify the Test case execution with saved session state ", async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");
    const country = await page
        .locator('#companies-table tr')
        .filter({ hasText: 'Yoshi Tannamuri' })
        .locator('[data-col="country"]')
        .innerText();

    console.log(`Yoshi Tannamuri lives in  ${country}`);



});