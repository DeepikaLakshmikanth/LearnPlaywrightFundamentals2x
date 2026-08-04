import { test, expect } from 'playwright/test';

test(" Verify the Test case execution with saved session state ", async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/webtable");

    const checkstatus = page.locator("//td[text()='Aarav.Sharma']/preceding-sibling::td/input[@type='checkbox']");
    await checkstatus.check(); // Check the checkbox where the Name is Aarav.Sharma


});