import { test, expect } from '@playwright/test';

test('Verify Press Sequential Keys', async ({ page }) => {

    await page.goto("https://www.awesomeqa.com/practice.html");
    await page.locator("[name='firstname']").pressSequentially("the testing academy", { delay: 1000 });
    page.waitForTimeout(2000);


    await page.goto("https://app.vwo.com/login");
    page.goBack();
    await page.waitForTimeout(2000);




});