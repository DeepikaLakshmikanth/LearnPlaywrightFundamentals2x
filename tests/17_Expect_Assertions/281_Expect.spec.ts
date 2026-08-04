import { test, expect } from '@playwright/test';

test('Verify', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/practice#page");
    await page.getByTestId("first-name").fill("Saurabh");

    //Soft Assert : Each line asserts it own failure and test execution continue either way

    const firstName = await page.getByTestId("first-name");
    await expect.soft(firstName).toHaveAttribute('id', 'first-name');
    await expect.soft(firstName).toBeVisible();
    await expect.soft(firstName).toHaveValue('');
    // Hard Assertion : If any line fails , test execution stops and next lines will not be executed
    await expect(firstName).toBeEnabled();

    // this line will not be executed if the abpve line fails 
    await page.goto("https://app.thetestingacademy.com/playwright/webtable");
    await expect(page.locator("#error")).not.toBeVisible();

    const title = await page.title();
    expect(title).not.toContain("error");



});