import { test, expect } from 'playwright/test';

test(" Verify the Hover menu on the testing academy ", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu")
    await page.getByTestId("nav-add-ons").hover();
    let menuitems = await page.getByLabel('Add-ons submenu', { exact: true }).all();
    for (let eachitem of menuitems) {
        console.log("Name of menu item : ", await eachitem.innerText(), "\\n");
    }
    await page.getByRole('menu').getByTestId('test-id-Wifi').click();
    //await page.pause();

});