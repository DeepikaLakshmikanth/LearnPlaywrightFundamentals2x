import { test, expect } from '@playwright/test';
import path from "path";


test.describe("File Upload", () => {

    test.use({
        storageState: "./user1-session.json"
    });

    test.beforeEach(async ({ page }) => {
        await page.goto("https://app.thetestingacademy.com/student/settings");
        await page.waitForTimeout(2000);
    });

    test("Verify the Upload button is working and save the file", async ({ page }) => {
        const filepath = path.join(__dirname, 'DEEP.jpg');
        console.log("File path :", filepath);

        await expect(page.locator("//h1")).toHaveText('Profile & Settings');
        await page.waitForTimeout(2000);
        //page.getByRole('button', { name: 'Upload Photo', exact: true }).click();       

        await page.setInputFiles("label[for^='avatar']", filepath);

    });

});

