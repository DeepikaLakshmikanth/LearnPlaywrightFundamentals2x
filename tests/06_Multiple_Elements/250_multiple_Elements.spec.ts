import { test, expect } from 'playwright/test';

test(" Basic : Verify how to handle multiple elements ", async ({ page }) => {

    // 1. Navigate to the page  2. Find the locator which gives all the elements and text 3. loop through it and find the one which we want to click 

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const rightPanleLinktext: string[] = await page.locator("a.list-group-item").allInnerTexts();
    console.log("All the elements are : ", rightPanleLinktext.length);

    for (const linkText of rightPanleLinktext) {
        console.log("All the elements are : ", linkText);
    }

    const rightPaneLinktext = await page.locator("a.list-group-item").all();
    for (const linkText of rightPaneLinktext) {
        console.log("All the elements are : ", await linkText.getAttribute("href"));
    }

});
