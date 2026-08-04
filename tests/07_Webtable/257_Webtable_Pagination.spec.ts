
import { test, expect } from 'playwright/test';

test(" Verify the Test case execution with saved session state ", async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");
    const pagecount = 3;
    const allemail: string[] = [];

    for (let p = 1; p <= pagecount; p++) {
        console.log(`page - ${p}`);
        const email = await page.locator('#employees-tbody tr td[data-col="email"]').allInnerTexts();
        allemail.push(...email);
        console.log(allemail);




    }








});