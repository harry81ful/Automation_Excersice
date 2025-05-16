import { Page, Locator } from "@playwright/test";

export class homePageElements {
  readonly page: Page;

  readonly viewProduct1: Locator;
  readonly viewProduct2: Locator;
  readonly categoryHeading: Locator;
  readonly allProductList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.allProductList = page.locator(".col-sm-4");
    this.viewProduct1 = page.locator("a[href='/product_details/1']");
    this.viewProduct2 = page.locator("a[href='/product_details/2']");
    this.categoryHeading = page.locator("h2", { hasText: "Category" });
  }

  //list all the products and choose one of the product to add to cart

  async listProducts(productName: string) {
    const filteredProducts = this.allProductList.filter({
      has: this.page.locator(`.productinfo p`, { hasText: productName }),
    });

    const count = await filteredProducts.count();
    console.log(`Found ${count} matching products with name "${productName}"`);

    if (count === 0) {
      throw new Error(`Product "${productName}" not found.`);
    }

    const productCard = filteredProducts.nth(0);
    const viewProductLink = productCard.locator("a", {
      hasText: "View Product",
    });

    // Get the href attribute
    const href = await viewProductLink.getAttribute("href");
    console.log("Href value:", href); // Example: /product_details/2

    // Extract product number using regex
    const match = href?.match(/\/product_details\/(\d+)/);
    const productNumber = match ? match[1] : null;
    let productLink = this.page.locator(
      `a[href="/product_details/${productNumber}"]`
    );
    await productLink.click();
  }

  // Dynamically select the menu items

  async clickMenuItem(itemName: string) {
    const menuItem = this.page.getByRole("link", { name: itemName });
    await menuItem.waitFor({ state: "visible" });
    await menuItem.click();
  }

  //Stepdef implementation
  // import { homePageElements } from "../pageObjectModels/homePageElements";
  // import { Given } from "@cucumber/cucumber";

  // Given("I click on the {string} menu item", async function (menuItem: string) {
  //   const homePage = new homePageElements(this.page);
  //   await homePage.clickMenuItem(menuItem);
  // });
  //Scenario: Navigate through header
  //   Given I click on the "Products" menu item
  //   Then I should see the Products page

  async viewFirstProduct(page: Page) {
    await this.viewProduct1.waitFor({ state: "visible" });
    await this.viewProduct1.click();
  }

  async viewSecondProduct(page: Page) {
    await this.viewProduct2.waitFor({ state: "visible" });
    await this.viewProduct2.click();
  }
}
