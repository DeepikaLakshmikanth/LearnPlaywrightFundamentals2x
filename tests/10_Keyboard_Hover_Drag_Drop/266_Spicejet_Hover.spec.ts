import { test, expect } from 'playwright/test';

test(" Hover functionality on the SpiceJet ", async ({ page }) => {

    await page.goto("https://spicejet.com");
    await page.getByText("Add-ons", { exact: true }).hover();
    await page.getByText("FlyEarly", { exact: true }).click();


});