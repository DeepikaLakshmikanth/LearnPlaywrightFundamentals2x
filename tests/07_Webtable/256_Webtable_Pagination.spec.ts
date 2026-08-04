
import { test, expect } from 'playwright/test';

test(" Verify the Test case execution with saved session state ", async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    // Find one person's email id and country
    const row = page.locator('#employees-tbody tr').filter({ hasText: 'Priya Kapoor' });
    const email = await row.locator("td[data-col='email']").innerText();
    const country = await row.locator("td[data-col='country']").innerText();


    console.log("Priya is in  ", email, country);
    let name = "Luca Greco";
    let roww;
    while (true) {
        roww = page.locator('#employees-tbody tr').filter({ hasText: name });
        if (await roww.count() > 0) {
            break;
        }
        const Nextbutton = page.getByTestId('next-page');
        if (await Nextbutton.isDisabled()) throw new Error("Row not Found");
        await Nextbutton.click();

    }
    const emailw = await roww.locator("td[data-col='email']").innerText();
    const countryw = await roww.locator("td[data-col='country']").innerText();

    console.log(`${name} is in ${emailw} , ${countryw}`);



});