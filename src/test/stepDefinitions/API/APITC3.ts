import { Given, Then, When } from "@cucumber/cucumber";
import { baseUrl } from "../../../../Utilities/util";
import { expect } from "playwright/test";

Given("the user sends a GET request for the brands list", async function () {
  this.response = await this.requestContext.get(baseUrl + "brandsList");
});

Then(
  "the response body should have property {string} with value {int}",
  async function (responseCode: string, responseValue: number) {
    const body = await this.response.json();
    expect(body).toHaveProperty(responseCode, responseValue);
  }
);

Then(
  "the user should get all the brand count and should be equal to {int}",
  async function (count: number) {
    const body = await this.response.json();
    const totalBrandCount = body.brands.length;
    expect(totalBrandCount).toEqual(count);
  }
);

Then(
  "the response body should contain {string}",
  async function (brand: string) {
    const body = await this.response.json();
    //console.log(body.brands);
    const brandExists = body.brands.some((b: any) => b.brand === brand);
    expect(brandExists).toBeTruthy();
  }
);
