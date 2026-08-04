import { test, expect } from 'playwright/test';

test(" Verify the elements ", async ({ page }) => {

    await page.goto("https://www.spicejet.com/ ");
    //fetch the From 
    await page.getByTestId('to-testID-origin').click();
    await page.getByTestId('to-testID-origin').getByRole('textbox').fill("DEL");
    await page.waitForTimeout(2000);

    await page.getByTestId('to-testID-destination').click();
    await page.getByTestId('to-testID-destination').getByRole('textbox').fill("BEN");
    await page.waitForTimeout(2000);





});