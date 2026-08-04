import { test, expect } from '@playwright/test';

test('login form is reachable via steps', async ({ page }) => {

    await test.step('Go to the login page', async () => {
        await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter.html');
    });

    await test.step('Fields are visible', async () => {
        await expect(page.getByRole("textbox", { name: "Email Address" })).toBeVisible();
        await expect(page.getByRole("textbox", { name: "Password" })).toBeVisible();
    });

    await test.step('Submit + assert validation ', async () => {
        await page.getByRole("button", { name: /Login/i }).click();
        await expect(page.getByText(/required|invalid/i)).toBeVisible();

    });

});