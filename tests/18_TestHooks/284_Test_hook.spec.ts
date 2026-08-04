import { test, expect } from '@playwright/test';
const URL = "https://app.thetestingacademy.com/playwright/multiple_element_filter.html";

test('title test', async ({ page, browserName }) => {
    test.skip(browserName === "firefox", "This featureS is not supported in firefox");
    await page.goto(URL);
    await expect(page).toHaveTitle(/Multiple Element Filter/, { timeout: 10000 });

});

test('email is visible (slow on firefox)', async ({ page, browserName }) => {
    test.slow(browserName === "firefox", "firefox is slow on this layout");
    await page.goto(URL);
    await expect(page.getByRole("textbox", { name: "Email Address" })).toBeVisible();
});

test.fixme('password is visible (slow on firefox)', async ({ page }) => {
    await page.goto(URL);
    await expect(page.getByRole("textbox", { name: "Password" })).toBeVisible();

});

test('Expected to fail', async ({ page }) => {
    test.fail();
    await page.goto(URL);
    await expect(page.getByText("New customer era", { exact: true })).toBeVisible();
});