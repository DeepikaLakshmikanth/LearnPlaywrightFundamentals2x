import { log } from 'console';
import { test, expect } from 'playwright/test';

test(" Basic : Verify how to handle multiple elements ", async ({ page }) => {

    // 1. Navigate to the page  2. Find the locator which gives all the elements and text 3. loop through it and find the one which we want to click 

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    await page.getByTestId("forgotten-password-link").click();

    const toastmessage = page.getByRole('status');

    if (toastmessage) {
        //page.getByText("Forgotten Password clicked — now assert the URL/hash or visible toast in Playwright.");
        // page.getByRole('status').allInnerTexts();
        console.log("The link is clicked", await page.getByRole('status').allInnerTexts());
    }



});
