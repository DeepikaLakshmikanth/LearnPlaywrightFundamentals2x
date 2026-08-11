import { test, expect } from '@playwright/test';
import path from 'path';
import loginData from './test-data/registration-data.json'
test.describe('DDT Simple', () => {


    test.beforeEach('Launch  the application under test', async ({ page }) => {
        await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    });

    test.afterEach(async ({ }, testInfo) => {
        console.log(`afterEach : ${testInfo.title} - status ${testInfo.status}`);

    });

    for (const data of loginData) {

        test(`Verify the Login functionality using ${data.description}`, async ({ page }) => {

            const textboxEmailAddress = page.getByRole('textbox', { name: 'email' });
            const textboxPassword = page.getByRole('textbox', { name: 'password' })
                .or(page.locator("#password"))
                .or(page.locator("[name = \"password\"]"));
            const btnLogin = page.getByRole("button", { name: "Login to Practice Account" })
                .or(page.getByTestId("login-button"))
                .or(page.getByText("Login to Practice Account"));


            await textboxEmailAddress.fill(data.username);
            await textboxPassword.fill(data.password);
            await btnLogin.click();

            // if (data.shouldPass) {
            //     await expect(page).not.toHaveURL(/multiple_element_filter/);
            // } else {
            //     await expect(page.getByText(data.expectedError)).toBeVisible();
            // }


        });
    }



});