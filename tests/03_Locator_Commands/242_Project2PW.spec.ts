import { test, expect } from '@playwright/test';

test('Verify the sign up page has incorrect email Id', async ({ page }) => {

    await page.goto("https://vwo.com/free-trial");
    await page.getByRole('textbox', { name: 'email' }).fill('asdas');

    await page.getByRole('checkbox').check();

    await page.getByRole('button', { name: 'Create a Free Trial Account' }).click();

    let error_message = await page.locator("//div[contains(@class, 'invalid-reason')]").first().innerText();

    //let error_message = await page.getByText("The email address you entered is incorrect.").textContent(); 
    // This can be used,however, it will not work if the text is dynamic, so we can use the above method to
    //  get the text and then verify it.
    expect(error_message).toContain("The email address you entered is incorrect.");

});