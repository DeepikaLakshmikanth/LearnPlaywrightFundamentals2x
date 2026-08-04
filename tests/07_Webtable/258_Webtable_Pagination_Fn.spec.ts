
import { test, expect, Page, Locator } from 'playwright/test';

async function FindRowByName(page: Page, name: string): Promise<Locator> {

    while (true) {
        const roww = page.locator('#employees-tbody tr').filter({ hasText: name });
        if (await roww.count()) return roww;


        const Nextbutton = page.getByTestId('next-page');
        if (await Nextbutton.isDisabled()) throw new Error("Row not Found");
        await Nextbutton.click();

    }

}

test('Verify the Test case execution with saved session state ', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    let name = "Luca Greco";
    const row = await FindRowByName(page, 'Luca Greco');
    const emailw = await row.locator('td[data-col="email"]').innerText();
    const countryw = await row.locator('td[data-col="country"]').innerText();

    console.log(emailw, countryw);

});

