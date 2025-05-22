import { Page, Locator, expect } from "@playwright/test";
import {
  generateUniqueEmailId,
  firstName,
  lastName,
  tc2email,
  tc2password,
} from "../Utilities/util";

export class singupPageElements {
  readonly page: Page;
  readonly nameInputfield: Locator;
  readonly emailInputfield: Locator;
  readonly singupButton: Locator;
  readonly newUserText: Locator;
  readonly loginToaccountText: Locator;
  readonly exisitingUserEmail: Locator;
  readonly exisitingUserPassword: Locator;
  readonly loginButton: Locator;
  readonly loginErorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInputfield = page.locator('[data-qa="signup-name"]');
    this.emailInputfield = page.locator('[data-qa="signup-email"]');
    this.singupButton = page.getByRole("button", { name: "Signup" });
    this.newUserText = page.locator("h2", { hasText: "New User Signup!" });
    this.loginToaccountText = page.locator("h2", {
      hasText: "Login to your account",
    });
    this.exisitingUserEmail = page.locator('[data-qa="login-email"]');
    this.exisitingUserPassword = page.locator('[data-qa="login-password"]');
    this.loginButton = page.locator('[data-qa="login-button"]');
    this.loginErorMessage = page.locator("p", {
      hasText: "Your email or password is incorrect!",
    });
  }

  async enterName() {
    await this.nameInputfield.waitFor({ state: "visible" });
    await this.nameInputfield.fill(firstName + " " + lastName);
  }
  async enterEmail() {
    await this.emailInputfield.waitFor({ state: "visible" });
    await this.emailInputfield.fill(generateUniqueEmailId());
  }

  async clickSingupButton() {
    await this.singupButton.waitFor({ state: "visible" });
    await this.singupButton.click();
  }
  async exisitingUserLogin() {
    await this.exisitingUserEmail.waitFor({ state: "visible" });
    await this.exisitingUserEmail.fill(tc2email);
    await this.exisitingUserPassword.waitFor({ state: "visible" });
    await this.exisitingUserPassword.fill(tc2password);
  }

  async loginRules() {
    // 1. App-level error message
    const isAppErrorVisible = await this.loginErorMessage
      .isVisible()
      .catch(() => false);
    if (isAppErrorVisible) {
      await expect(this.loginErorMessage).toBeVisible();
      return;
    }

    // 2. Browser-level native validation (invalid email format)
    const emailValidationMessage = await this.page.evaluate(() => {
      const emailInput = document.querySelector(
        "input[type='email']"
      ) as HTMLInputElement;
      emailInput.reportValidity(); // triggers tooltip
      return emailInput.validationMessage;
    });

    if (emailValidationMessage && emailValidationMessage.length > 0) {
      console.log("Native browser validation:", emailValidationMessage);
      expect(emailValidationMessage).toContain("@");
      return;
    }

    // 3. If neither error is visible, fail the test
    throw new Error("No error message was displayed for invalid login.");
  }
}
