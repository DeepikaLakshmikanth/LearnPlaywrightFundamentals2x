import { test, expect } from 'playwright/test';

test(" Verify the login on the app.the testingacademy.com", async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    console.log("Nvaigate to the page multiplefilter")
    await expect(page.getByText("Student Login").isVisible());
    console.log("Login section is visible")

    await page.getByLabel('email').fill("student@gmail.com");
    await page.getByLabel('password').fill('Hacker4321');
    await page.getByRole('checkbox', { name: 'remember' }).check();
    await page.getByRole('button', { name: 'Login to Practice Account' }).click();
    await page.waitForTimeout(5000);
    await expect(page).toHaveURL(/#login-success/);



});