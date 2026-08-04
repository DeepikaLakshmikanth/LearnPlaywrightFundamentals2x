import { test, expect } from 'playwright/test';

test(" Context Menu - Right Click  ", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/context-menu");
    await page.getByTestId("ctx-target").first().click({ button: 'right' });
    let allitems: string[] = await page
        .locator('ul.context-menu-list span')
        .allInnerTexts();
    for (let i in allitems) {
        console.log(allitems[i]);
    }
    //await page.pause();

    await page.getByText("Copy", { exact: true }).first().click();



});