import { Page, Locator } from "@playwright/test";
import {
  passwordDev,
  lastName,
  addressLine1,
  gender,
  country,
  comments,
} from "../Utilities/util";

export class registrationFormPageElements {
  readonly page: Page;
  readonly passwordInputfield: Locator;
  readonly firstNameInputfield: Locator;
  readonly lastNameInputfield: Locator;
  readonly addressInputfield: Locator;
  readonly stateInputfield: Locator;
  readonly cityInputfield: Locator;
  readonly zipCodeInputfield: Locator;
  readonly mobileNumberInputfield: Locator;
  readonly createAccountButton: Locator;
  readonly accountInfoText: Locator;
  readonly genderRadioButton: Locator;
  readonly newsLetterCheckbox: Locator;
  readonly receiveOffersCheckbox: Locator;
  readonly accountCreatedText: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.passwordInputfield = page.locator('[data-qa="password"]');
    this.firstNameInputfield = page.locator('[data-qa="first_name"]');
    this.lastNameInputfield = page.locator('[data-qa="last_name"]');
    this.addressInputfield = page.locator('[data-qa="address"]');
    this.stateInputfield = page.locator('[data-qa="state"]');
    this.cityInputfield = page.locator('[data-qa="city"]');
    this.zipCodeInputfield = page.locator('[data-qa="zipcode"]');
    this.mobileNumberInputfield = page.locator('[data-qa="mobile_number"]');
    this.createAccountButton = page.getByRole("button", {
      name: "Create Account",
    });
    this.accountInfoText = page.getByText("Enter Account Information");
    this.genderRadioButton = page.locator(
      `input[name="title"][value="${gender}"]`
    );
    this.newsLetterCheckbox = page.locator('input[name="newsletter"]');
    this.receiveOffersCheckbox = page.locator('input[name="optin"]');
    this.accountCreatedText = page.getByText("Account Created!");
    this.continueButton = page.locator('[data-qa="continue-button"]');
  }

  async enterPassword() {
    await this.passwordInputfield.waitFor({ state: "visible" });
    await this.passwordInputfield.fill(passwordDev);
  }
  async enterFirstName() {
    await this.firstNameInputfield.waitFor({ state: "visible" });
    await this.firstNameInputfield.fill("John");
  }
  async enterLastName() {
    await this.lastNameInputfield.waitFor({ state: "visible" });
    await this.lastNameInputfield.fill("Doe");
  }
  async enterAddress() {
    await this.addressInputfield.waitFor({ state: "visible" });
    await this.addressInputfield.fill("123 Main St");
  }

  async enterState() {
    await this.stateInputfield.waitFor({ state: "visible" });
    await this.stateInputfield.fill("California");
  }
  async enterCity() {
    await this.cityInputfield.waitFor({ state: "visible" });
    await this.cityInputfield.fill("Los Angeles");
  }
  async enterZipCode() {
    await this.zipCodeInputfield.waitFor({ state: "visible" });
    await this.zipCodeInputfield.fill("90001");
  }
  async enterMobileNumber() {
    await this.mobileNumberInputfield.waitFor({ state: "visible" });
    await this.mobileNumberInputfield.fill("1234567890");
  }
  async clickCreateAccountButton() {
    await this.createAccountButton.waitFor({ state: "visible" });
    await this.createAccountButton.click();
  }

  async selectGender() {
    await this.genderRadioButton.waitFor({ state: "visible" });
    await this.genderRadioButton.check();
  }

  async selectNewsLetterCheckbox() {
    await this.newsLetterCheckbox.waitFor({ state: "visible" });
    await this.newsLetterCheckbox.check();
  }
  async selectReceiveOffersCheckbox() {
    await this.receiveOffersCheckbox.waitFor({ state: "visible" });
    await this.receiveOffersCheckbox.check();
  }

  async FillRegistrationForm() {
    //const fName =  firstName;
  }
}
