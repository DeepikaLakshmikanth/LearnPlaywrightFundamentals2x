import { test, expect } from '@playwright/test'


test.beforeAll(async () => {
    console.log('Before All -- Server is up');
});

test.beforeEach(async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright');

});
test('Practice has 25 cards', async ({ page }) => {
    await expect(page.locator('.index-card')).toHaveCount(35);

});
test('sidebar collapse button works', async ({ page }) => {
    await page.getByLabel('Toggle sidebar').first().click();
    await expect(page.locator('.tta-shell')).toHaveAttribute('data-sidebar-collapsed', 'true');

});
test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
        await page.screenshot({ path: `out/fail-${testInfo.title}.png`, fullPage: true });
    }
});

test.afterAll(async () => {
    console.log('afterAll — tear down');
});
