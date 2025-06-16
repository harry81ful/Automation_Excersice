import { Given, Then, When } from "@cucumber/cucumber";
import { baseUrl } from "../../../../Utilities/util";
import { expect } from "playwright/test";

When(
  "the user sends a PUT request to the brands list API endpoint",
  async function () {
    this.response = await this.requestContext.put(baseUrl + "brandsList");
  }
);

Then(
  "the response body should have property {string} with value {string}",
  async function (responseCode: string, responseVale: number) {
    const body = await this.response.json();
    expect(body).toHaveProperty(responseCode, responseVale);
  }
);
