import { test, expect } from '@playwright/test';
import path from 'path';
import { readCSV } from './util/csv_reader';

test.describe('Login functionality', () => {
    const logindata = readCSV(path.join(__dirname, 'test-data', 'login-data.csv'));
    for (const data of logindata) {

        test(`Verify the Login functionality using : ${data.description}`, async ({ page }) => {

            await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

            let username = page.getByRole('textbox', { name: 'email' });
            let password = page.getByRole('textbox', { name: 'password' });
            let btnLogin = page.getByTestId('login-button');
            await username.fill(data.username);
            await password.fill(data.password);
            await btnLogin.click();

            await expect(page).toHaveURL(data.expectedError);

        });

    }

});