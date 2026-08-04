import { test, expect } from '@playwright/test';



test('Visible . enabled . Checked . Disabled', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/practice.html");
    // const automationCheckbox = page.getByRole("checkbox", { name: /UFT/ });
    // await automationCheckbox.check();
    // await expect(automationCheckbox).not.toBeChecked();

    const submit = page.getByTestId("profile-submit");
    await expect(submit).toBeVisible();
    await expect(submit).toBeEnabled();

    await expect(page).toHaveTitle(/QA Profile/);
    const appUrl = page.url();
    expect(appUrl).toContain("thetestingacademy");



});