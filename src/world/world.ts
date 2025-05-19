import { setWorldConstructor, World } from "@cucumber/cucumber";
import { APIRequestContext, request } from "@playwright/test";

export class CustomWorld extends World {
  requestContext!: APIRequestContext;
  isApiTest: boolean = false; // ✅ Add this line

  async initRequestContext() {
    this.requestContext = await request.newContext();
  }
}

setWorldConstructor(CustomWorld);
