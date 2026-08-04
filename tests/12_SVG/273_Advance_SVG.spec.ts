

import { test, expect, Locator } from 'playwright/test';
const URL = "https://simplemaps.com/svg/country/in";

test.describe('Flipkart SVG exercise', () => {
    test.beforeEach(async ({ page }) => {
        console.log("Before running the Test Suite");
        await page.goto(URL);
    });

    test('TC #1 : Generate a List of all States', async ({ page }) => {
        const AllState = await page.locator("//div[@id='admin1_map_inner']//*[name()='svg']//*[name()='path' and contains (@class,'sm_state')]").all();
        for (const state of AllState) {
            const classState = await state.getAttribute('class');
            console.log(classState);
            if (classState?.includes("INUP")) {
                state.click();
            }
        }

    });

    test('TC #2', async ({ page }) => {
        console.log("Running the Test Case 2");

    });

});


