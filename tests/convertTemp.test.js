// Create two test cases for converting between celsius and fahrenheit
// Test case 1: Converting 30 deg celsius will return 86 deg fahrenheit
// Test case 2: Converting 104 deg fahrenheit will return 40 deg celsius
// Both test cases need to pass

const Converter = require("../src/convertTemp");

const convert = new Converter();

describe("Temperature conversion", () => {
  test(`should return 86 when converting 30 deg celsius to fahrenheit`, () => {
    expect(convert.convertToFahrenheit(30)).toBe(86);
  });

  test(`should return 20 when converting 68 deg fahrenheit to celsius`, () => {
    expect(convert.convertToCelsius(68)).toBe(20);
  });
});
