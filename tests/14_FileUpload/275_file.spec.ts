import { test, expect } from 'playwright/test';
import path from 'path';

test(" Verify the Test case execution with saved session state ", async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/upload');
    const filepath = path.join(__dirname, 'testdata.txt');
    console.log("File path :", filepath);
    await page.setInputFiles('#file-upload', filepath);
    await page.click('#file-submit');

    await expect(page.locator('h3')).toHaveText("File Uploaded!");
    await expect(page.locator('#uploaded-files')).toHaveText("testdata.txt");

});