import { test, expect } from '@playwright/test';

test.describe("Expect Assertions", () => {

    test('2 Locator Based Assertion  ', async ({ page }) => {
        await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

        const heading = page.getByText("multiple element filters", { exact: true });
        await expect(heading).toBeVisible();
        await expect(heading).toContainText('filter', { timeout: 5000 });

        const email = page.getByRole('textbox', { name: 'Email Address' });
        await expect(email).toHaveAttribute('id', 'email');
        await expect(email).toHaveAttribute('type', 'email');
        await expect(email).toHaveAttribute('placeholder', 'student@thetestingacademy.com');

        const footerlinks = page.locator('footer a');
        await expect(footerlinks).toHaveCount(16);




    });
});