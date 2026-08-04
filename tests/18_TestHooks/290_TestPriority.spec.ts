import { test, expect } from '@playwright/test'

test('TC01 - Login should work ', async ({ page }) => {
    await page.goto('https://app.vwo.com');
});

test('TC02 - Dashoboard should open', async ({ page }) => {
    await page.goto('https://app.vwo.com');
});

test.describe.configure({ mode: 'serial' });

test('Priority 1  -Login Test', async ({ page }) => {
    await page.goto('https://app.vwo.com');
});
test('Priority 2  - Dashboard Test', async ({ page }) => {
    await page.goto('https://app.vwo.com');
});
test('Priority 3  - Logout Test', async ({ page }) => {
    await page.goto('https://app.vwo.com');
});

test(' Login Test @p1 @smoke', async ({ page }) => {
    await page.goto('https://app.vwo.com');
});
test('Dashboard Test @p2', async ({ page }) => {
    await page.goto('https://app.vwo.com');
});
test('Logout Test @p3', async ({ page }) => {
    await page.goto('https://app.vwo.com');
});