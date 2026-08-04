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

test(" Verify the Test case execution with saved session state ", async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");
    const row = await FindRowByName(page, 'Mia Hoffmann');
    const email = await row.locator('[data-col="email"]').innerText();
    console.log(`Mia Hoffmann email id is  ${email}`);

});