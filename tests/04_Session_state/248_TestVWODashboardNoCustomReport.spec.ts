import { test, expect } from '@playwright/test';

// load the saved session state from the file user-session.json and use it in the test

test.use({
    storageState: './user-session.json'
});

test('Go directly to dashboard - no login ', async ({ page }) => {

    await page.goto("https://app.wingify.com/#/dashboard/get-started?accountId=1227004");
    await expect(page).toHaveURL(/dashboard/);
    console.log("Dashboard loaded no login needed");


    await page.waitForTimeout(5000); // wait for 5 seconds to see the dashboard

});

test('Go directly to settings - no login ', async ({ page }) => {

    await page.goto("https://app.wingify.com/#settings/accounts/general?accountId=1227004");
    await expect(page).toHaveURL(/settings/);
    console.log("Settings loaded still logged in");
    await page.waitForTimeout(5000); // wait for 5 seconds to see the dashboard

});


