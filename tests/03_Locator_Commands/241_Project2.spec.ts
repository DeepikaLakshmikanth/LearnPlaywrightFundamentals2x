import { test, expect } from '@playwright/test';

test('Verify the sign up page has incorrect email Id', async ({ page }) => {

    await page.goto("https://vwo.com/free-trial");
    let inputemail = page.locator('#page-v1-step1-email');
    await inputemail.fill('asdas');

    await page.locator("#page-free-trial-step1-cu-gdpr-consent-checkbox").click();

    await page.locator("//button[@data-qa='page-su-submit']").first().click();

    let error_message = await page.locator("//div[contains(@class, 'invalid-reason')]").first().innerText();
    expect(error_message).toContain("The email address you entered is incorrect.");

});