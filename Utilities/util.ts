// The information stored here is sensitive in natur.
// it is always a good parctice to separte it from the code and when pushing github will not be avaialbe to public or anyone who has access to the repository
//This is file is just for demostration

import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";

export const foreName: () => string = () => faker.person.firstName();
export const surName: () => string = () => faker.person.lastName();
export const addLine1: () => string = () => faker.location.streetAddress();
export const countryName: () => string = () => faker.location.country();
export const PhoneNumber: () => number = () => Number(faker.phone.number());
export const creditCardNumber: () => number = () =>
  Number(faker.finance.creditCardNumber());
export const creditCardCVC: () => number = () =>
  Number(faker.finance.creditCardCVV());
export const expiryMonth: () => number = () =>
  Number(faker.date.month({ context: true }));
export const expiryYear: () => number = () =>
  Number(faker.date.future().getFullYear().toString().slice(-2)); // Get last two digits of the year

export const firstName = faker.person.firstName();
export const lastName = faker.person.lastName();
export const passwordDev = "D3v3nv1r0m3nt";
export const UrlTest = "https://www.automationexercise.com/";
export const passwordTest = "T35t3nv1r0m3nt";
//export const emailId = `${firstName}${uuidv4}@gmail.com`;
export const addressLine1 = "123 Main St";
export const country = "United States";
export const comments = "This is a comment";
export const nameOnCard = "Test User";
export const cardNumber = "123456789101";
export const cvcNumber = "123";

export const baseUrl = "https://automationexercise.com/api/";
export const gender = "Mr";
export const tc2name = "harry81ful";
export const tc2email = "harry81fu@gmail.com";
export const tc2password = "Testpass";

export const generateUniqueEmailId = (): string => {
  let firstName = faker.person.firstName(); // Generate a new first name
  return `${firstName}${uuidv4()}@gmail.com`;
};

export const customerDetails = () => {
  const firstName = foreName();
  const lastName = faker.person.lastName();
  const email = firstName + lastName + "@gmail.com";
  const phone = PhoneNumber();
  const address = addLine1();
  const country = countryName();
  const cardNumber = creditCardNumber();
  const cvc = creditCardCVC();
  const expMonth = expiryMonth();
  const expYear = expiryYear();
  return {
    firstName,
    lastName,
    email,
    phone,
    address,
    country,
    cardNumber,
    cvc,
    expMonth,
    expYear,
  };
};
