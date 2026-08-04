import { test, expect } from 'playwright/test';

test(" Locate shadow dom and assert visible  ", async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/widgets/shadow-dom");

    // const card = page.getByTestId('card-account');
    // await card.locator("input[name='email']").fill('student@thetestingacademy.com');
    // await card.locator("input[name='password']").fill('pw');
    // await card.getByTestId('card-account-submit').click();
    // await expect(page.getByTestId('card-account-status')).toContainText('student@thetestingacademy.com');


    // const counter = page.getByTestId('counter-cart');
    // await counter.getByRole('button', { name: 'Increment' }).click();
    // await counter.getByRole('button', { name: 'Increment' }).click();
    // await expect(counter.getByTestId('counter-value')).toHaveText('5');

    const outer_card = page.getByTestId('nested-host');
    const inner_card = outer_card.getByTestId('card-inside-card');
    await inner_card.locator("input[name='email']").fill('student@thetestingacademy.com');
    await inner_card.locator("input[name='password']").fill('pw');
    await inner_card.getByTestId('card-inside-submit').click();
    await expect(page.getByTestId('card-inside-status')).toContainText('student@thetestingacademy.com');


});