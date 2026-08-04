import { test, expect } from '@playwright/test';

test('Verify the sign up page has incorrect email Id', async ({ page }) => {
    // No waitUntil specified - defaults to load
    await page.goto('https://exmaple.com/signup');

    let title = await page.title();
    console.log("Page title is: ", title);

    expect(page.url()).toBe("https://exmaple.com/signup");
    console.log("Page URL verified: ", page.url());


});

test('Navigate to the custom referrer page', async ({ page }) => {
    // Tell server the user came from Google search results page
    await page.goto("https://app.com/landing", { referer: "https://google.com/search?q=testing" });

    console.log("Page loaded with Google referrer");
    console.log("URL ", page.url());


});