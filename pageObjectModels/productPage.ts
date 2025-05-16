import { Page, Locator } from "@playwright/test";

export class productPageElements {
  readonly page: Page;
  readonly addToCartButton: Locator;
  readonly modalContineButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.getByRole("button", {
      name: "Add to cart",
    });
    this.modalContineButton = page.getByRole("button", {
      name: "Continue Shopping",
    });
  }

  async clickAddToCart() {
    await this.addToCartButton.waitFor({ state: "visible" });
    await this.addToCartButton.click();
  }
}
