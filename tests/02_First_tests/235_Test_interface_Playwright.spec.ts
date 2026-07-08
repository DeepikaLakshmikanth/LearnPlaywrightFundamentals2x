import { test, expect } from '@playwright/test';

test('Playwright interface test', async ({ page }) => {

    await page.goto("https://app.vwo.com/#login");
    await page.fill("#login-username", "admin");
    await page.fill("#login-password", "pass123");
    await page.click("#js-login-btn");
    await expect(page).toHaveURL("/dashboard");

    console.log("Title of the page is:", await page.title());

});

test('another test', async ({ page }) => {

    await page.goto("https://app.com/#signup");
    await expect(page).toHaveTitle("Asbury Park Press NJ | Jersey Shore & New Jersey News");

});