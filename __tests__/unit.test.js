// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from "../code-to-unit-test/unit-test-me";

// phone number
test("(123)456-7890 is valid phone number", () => {
  expect(isPhoneNumber("(123)456-7890")).toBe(true);
});
test("123-456-7890 is valid phone number", () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});
test("1234567890 is not valid phone number", () => {
  expect(isPhoneNumber("1234567890")).toBe(false);
});
test("333-444-44 is not valid phone number", () => {
  expect(isPhoneNumber("333-444-44")).toBe(false);
});

// email
test("hello@gmail.com is valid Email", () => {
  expect(isEmail("hello@gmail.com")).toBe(true);
});
test("mrpowell@gmail.com is valid Email", () => {
  expect(isEmail("mrpowell@gmail.com")).toBe(true);
});
test("mrpowell@.com is not valid Email", () => {
  expect(isEmail("mrpowell@.com")).toBe(false);
});
test("Iampowell.com is not valid Email", () => {
  expect(isEmail("Iampowel.com")).toBe(false);
});

// strong password
test("abcd1234 is strong password", () => {
  expect(isStrongPassword("abcd1234")).toBe(true);
});
test("password1234 is strong password", () => {
  expect(isStrongPassword("password1234")).toBe(true);
});
test("appleissweet^^ is not strong password", () => {
  expect(isStrongPassword("appleissweet^^")).toBe(false);
});
test("idon_tlikeorange is not strong password", () => {
  expect(isStrongPassword("idon_tlikeorange")).toBe(false);
});

// isDate
test("5/6/2025 is valid date", () => {
  expect(isDate("5/6/2025")).toBe(true);
});
test("10/24/2025 is valid date", () => {
  expect(isDate("10/24/2025")).toBe(true);
});
test("4/1 is not a valid date", () => {
  expect(isDate("4/1")).toBe(false);
});
test("250110 is not a valid date", () => {
  expect(isDate("250110")).toBe(false);
});

// hex color
test("#63677e is valid hex color", () => {
  expect(isHexColor("#63677e")).toBe(true);
});
test("#8b0000 is valid hex color", () => {
  expect(isHexColor("#8b0000")).toBe(true);
});
test("#98762 is not valid hex color", () => {
  expect(isHexColor("#98762")).toBe(false);
});
test("#13w1d13e is not valid hex color", () => {
  expect(isHexColor("#13w1d13e")).toBe(false);
});
