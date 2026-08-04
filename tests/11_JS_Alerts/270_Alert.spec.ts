import { test, expect } from 'playwright/test';

test(" JS Alert  ", async ({ page }) => {

    page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    // Register the JS alert 
    // page.once("dialog", async dialog => {
    //     console.log("Alert type :", dialog.type());
    //     console.log("Alert message :", dialog.message());
    //     expect(dialog.message()).toBe("I am a JS Alert");
    //     await dialog.accept();
    // });
    //await page.getByRole('button', { name: 'Click for JS Alert' }).click();

    // Register the JS Confirm
    // page.once("dialog", async dialog => {
    //     console.log("Alert type :", dialog.type());
    //     console.log("Alert message :", dialog.message());
    //     expect(dialog.message()).toBe("I am a JS Confirm");
    //     await dialog.accept();
    // });

    // await page.locator('button', { hasText: 'Click for JS Confirm' }).click();
    const inputText = "Hello, Deepika !"
    page.once("dialog", async dialog => {
        expect(dialog.type()).toBe('prompt');
        expect(dialog.defaultValue()).toBe('');
        await dialog.accept(inputText);
    });
    await page.locator('button', { hasText: 'Click for JS Prompt' }).click();

});