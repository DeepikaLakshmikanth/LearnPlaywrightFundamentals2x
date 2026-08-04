import { test, expect } from 'playwright/test';

test(" Verify Element by Filter ", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    const ForgottenPassword = page.locator('a.list-group-item').filter({ hasText: 'Forgotten Password' });
    await ForgottenPassword.click();  // click the Forgotten Password

    const accountLinks = page.locator('a.list-group-item');
    await expect(accountLinks).toHaveCount(13); // check wheter the right panel has 13 links


    const privacyLink = page.locator('footer a').filter({ hasText: 'Privacy Policy' });
    await expect(privacyLink).toHaveAttribute('href', '#privacy-policy');

});