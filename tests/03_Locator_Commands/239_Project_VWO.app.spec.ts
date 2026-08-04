//    https://app.vwo.com/#login
import { test, expect } from "playwright/test"

test("TC -1 Verify the Login page elements", async ({ page }) => {

    let username = page.locator("#login-username");
    let password = page.locator("#login-password");
    let loginButton = page.locator("#js-login-btn");

    // <input 
    // type="email" 
    // class="text-input W(100%)"
    //  name="username" 
    //  vwo-html-translate-attr="placeholder"
    //   vwo-html-translate-placeholder="login:enterEmailID" 
    //   id="login-username" 
    //   data-qa="hocewoqisi"
    //    placeholder="Enter email ID" 
    // >

    await username.fill("admin@admin.com");
    await password.fill("admin123");
    await loginButton.click();

    let errormessage = page.locator("#js-notification-box-msg");

    await expect(errormessage).toContainText("Your email, password, IP address or location did not match");
});