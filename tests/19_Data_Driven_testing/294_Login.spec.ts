import { test, expect } from '@playwright/test';
import testData from "./test-data/login.json";

test.describe('Login functionality using valid and invalid User data', async () => {

    test.beforeEach('Launch  the application under test', async ({ page }) => {
        await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    });

    test('Verify the Login functionality using invalid Data  ', async ({ page }) => {

        await page.getByRole('textbox', { name: 'email' }).fill(testData.invalidUser.email);
        await page.getByRole('textbox', { name: 'password' }).fill(testData.invalidUser.password);
        await page.getByTestId('login-button').click();

    });


    test('Verify the Login functionality using Valid Data ', async ({ page }) => {
        await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

        await page.getByRole('textbox', { name: 'email' }).fill(testData.validUser.email);
        await page.getByRole('textbox', { name: 'password' }).fill(testData.validUser.password);
        await page.getByTestId('login-button').click();

    });
});