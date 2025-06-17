import { Page, Locator, expect } from "@playwright/test";
import { firstName, lastName, message } from "../Utilities/util";

export class contactFormPageElements {
  readonly page: Page;
  readonly contacUsheading: Locator;
  readonly nameInputField: Locator;
  readonly emailInputField: Locator;
  readonly subjectInputField: Locator;
  readonly messageInputField: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;
  readonly chooseFileBtn: Locator;
  readonly homeBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.contacUsheading = page.locator('h2:has-text("Get In Touch")');
    this.nameInputField = page.locator('input[data-qa="name"]');
    this.emailInputField = page.locator('input[data-qa="email"]');
    this.subjectInputField = page.locator('input[data-qa="subject"]');
    this.messageInputField = page.locator('textarea[data-qa="message"]');
    this.chooseFileBtn = page.locator('input[name="upload_file"]');
    this.submitButton = page.locator('input[data-qa="submit-button"]');
    this.successMessage = page.locator("div.status.alert-success");
    this.homeBtn = page.locator('a.btn.btn-success:has-text("Home")');
  }

  async fillContactForm() {
    await this.contacUsheading.waitFor({ state: "visible" });
    await this.nameInputField.fill(firstName + " " + lastName);
    await this.emailInputField.fill(firstName + lastName + "@gmail.com");
    await this.subjectInputField.fill("Automation Testing");
    await this.messageInputField.fill(message);
  }

  async submitContactForm() {
    this.page.once("dialog", async (dialog) => {
      await dialog.accept();
    });
    await this.submitButton.click();
  }

  async clickOnHome() {
    await this.homeBtn.click();
  }
}
