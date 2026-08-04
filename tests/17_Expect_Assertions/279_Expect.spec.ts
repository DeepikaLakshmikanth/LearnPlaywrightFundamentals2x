import { test, expect } from '@playwright/test';

test.describe("Expect Assertions", () => {

    test('Verify the expect assertions ', async ({ page }) => {

        expect(1 + 2).toBe(3);
        expect(false).toBeFalsy();
        expect(true).toBeTruthy();
        expect(null).toBeNull();
        expect(34).toBeGreaterThan(30);
        expect([1, 2, 3]).toEqual([1, 2, 3]);
        expect({ role: "admin" }).toEqual({ role: "admin" });
        expect({ age: 20, role: "user" }).toEqual({ age: 20, role: "user" })


    });
});