import { test, expect, Locator } from 'playwright/test';
const URL = "https://flipkart.com/search";

test.describe('Flipkart SVG exercise', () => {
    test.beforeEach(async ({ page }) => {
        console.log("Before running the Test Suite");
        await page.goto(URL);
    });

    test('TC #1', async ({ page }) => {
        console.log("Running the Test Case 1");
        await page.locator('input[name= "q"]').fill("macmini");
        const svgElements: Locator = page.locator('svg');
        await svgElements.first().click();

        // const svgElementsAll: Locator[] = await page.locator('svg').all();
        // for (let svgElement in svgElementsAll) {
        //     // find and click 
        // }
        await page.locator("//button[@type='submit']").click();
    });

    test('TC #2', async ({ page }) => {
        console.log("Running the Test Case 2");

    });

});