import { test, expect } from '@playwright/test';
import { LoginPage } from './LoginPage';

test.describe('POM with Login Page Simple', () => {

    test('Login with valid credns', async ({ page }) => {

        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login("admin@gmail.com", "admin123");
        await expect(page).toHaveTitle("TTACart - Login");
    });
});