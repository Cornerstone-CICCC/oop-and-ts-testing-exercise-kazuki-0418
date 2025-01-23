// Create two test cases for incrementing and decrementing a number
// Test case 1: counter(10, 'increment') will eventually return 10
// Test case 2: counter(10, 'decrement') will eventually return 0
// Both test cases need to pass
// HINT: Use the jest `resolves` matcher so that it is easier to work with async functions

const counter = require("../src/counter");

// testing the code that use setTimeout
describe("Counter", () => {
  test("should return 4 when incrementing 4", () => {
    return expect(counter(4, "increment")).resolves.toBe(4);
  });

  test("should return 0 when decrementing 4", () => {
    return expect(counter(4, "decrement")).resolves.toBe(0);
  });

  test("should return not -2 when decrementing 0 ", async () => {
    const result = counter(0, "decrement");
    await expect(result).resolves.not.toBe(-2);
  });
});
