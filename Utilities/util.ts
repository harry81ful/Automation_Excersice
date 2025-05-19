// The information stored here is sensitive in natur.
// it is always a good parctice to separte it from the code and when pushing github will not be avaialbe to public or anyone who has access to the repository
//This is file is just for demostration

import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";

export const urlDev = "https://automationexercise.com/";
export const firstName = faker.person.firstName();
export const lastName = faker.person.lastName();
export const passwordDev = "D3v3nv1r0m3nt";
export const UrlTest = "https://test.automationexercise.com/";
export const passwordTest = "T35t3nv1r0m3nt";
//export const emailId = `${firstName}${uuidv4}@gmail.com`;
export const addressLine1 = "123 Main St";
export const country = "United States";
export const comments = "This is a comment";
export const nameOnCard = "Test User";
export const cardNumber = "123456789101";
export const cvcNumber = "123";
export const expiryMonth = "12";
export const expiryYear = "2031";
export const baseUrl = "https://automationexercise.com/api/";

export const generateUniqueEmailId = (): string => {
  const firstName = faker.person.firstName(); // Generate a new first name
  return `${firstName}${uuidv4()}@gmail.com`;
};
