import { test, expect, Locator } from 'playwright/test';
const URL = "https://app.thetestingacademy.com/playwright/widgets/svg";

test.describe.serial('Flipkart SVG exercise', () => {
    test.beforeEach(async ({ page }) => {
        console.log("Before running the Test Suite");
        await page.goto(URL);
    });

    test('TC #1 : Locate SVG root and assert visible for a shapes ', async ({ page }) => {
        console.log("Running the Test Case 1");
        const circleShape: Locator = page.locator('#circle-blue');
        await circleShape.click();

        const output = await page.locator('#shapes-output').innerText();
        expect(output).toContain('Blue circle');
    });

    test('TC #2 :Locate SVG root and assert visible on Bar chart', async ({ page }) => {
        console.log("Running the Test Case 2");
        // Click on the Q3 in the bar chart
        await page.getByRole('button', { name: /Q3 bar/ }).click();
        // Click on the 4 stars
        await page.getByRole('radio', { name: '4 stars' }).click();

        const allBars = await page.locator(".bar").all();
        for (let bar of allBars) {
            const qua = await bar.getAttribute('data-quarter');
            const height = await bar.getAttribute('height');
            console.log(qua);
            console.log(height);

        }


    });

});