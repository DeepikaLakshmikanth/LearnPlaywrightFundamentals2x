import { test, expect } from 'playwright/test';

test(" Verify the Orange", async ({ page }) => {

    await page.goto("https://awesomeqa.com/hr/web/index.php/auth/login");
    console.log("Nvaigate to the page multiplefilter")
    await expect(page.getByText("Student Login").isVisible());
    console.log("Login section is visible")

    await page.getByRole('textbox', { name: 'Username' }).fill("admin");
    await page.getByRole('textbox', { name: 'Password' }).fill('Awesomeqa@4321');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForTimeout(5000);
    await expect(page).toHaveTitle("OrangeHRM");

    const rowCount = await page.locator('.oxd-table-card').count();
    console.log("number of rows", rowCount);

    for (let i = 0; i < rowCount; i++) {

        const currentRow = await page.locator('.oxd-table-card').nth(i);
        const rowText = await currentRow.innerText();

        if (rowText.includes('Terminated')) {

            const firstName = await currentRow.locator('.oxd-table-cell').nth(2).innerText();
            console.log("First Name :", firstName);
            await page.locator('i[class= "oxd-icon bi-trash"]').nth(i).click();

        }
    }
});