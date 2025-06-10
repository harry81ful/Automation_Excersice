import { Page, Locator, expect } from "@playwright/test";

export class contactFormPageElements {
  readonly page: Page;
  readonly contacUsheading: Locator;
  readonly nameInputField: Locator;
  readonly emailInputField: Locator;
  readonly subjectInputField: Locator;
  readonly messageInputField: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;
}
