import { test, expect } from '@playwright/test';
test.describe('DDT Simple', () => {


    test.beforeEach('Launch  the application under test', async ({ page }) => {
        await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    });

    // Test Data = array of objects
    const loginData = [
        {
            description: "valid credentials",
            username: "admin@gmail.com",
            password: "admin123",
            expectURL: /admin/,
            shouldPass: true
        },
        {
            description: "invalid password",
            username: "admin@gmail.com",
            password: "wrongpass",
            expectURL: /admin/,
            shouldPass: false
        },
        {
            description: "empty username",
            username: "",
            password: "admin123",
            expectURL: /admin123/,
            shouldPass: false
        },
        {
            description: "empty password",
            username: "pramod@app.com",
            password: "",
            expectURL: /admin123/,
            shouldPass: false
        },
        {
            description: "both are empty ",
            username: "",
            password: "",
            expectURL: /multiple_element_filter/,
            shouldPass: false
        }
    ];

    for (const data of loginData) {

        test(`Verify the Login functionality using ${data.description}`, async ({ page }) => {

            await page.getByRole('textbox', { name: 'email' }).fill(data.username);
            await page.getByRole('textbox', { name: 'password' }).fill(data.password);
            await page.getByTestId('login-button').click();
        });
    }



});