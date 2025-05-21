import { Page, Locator } from "@playwright/test";
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
}
