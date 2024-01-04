import reverseString from "./reverseString";

test("reverse a string", () => {
  const inputString = "hello world";
  const reversedString = reverseString(inputString);
  expect(reversedString).toBe("dlrow olleh");
});

test("reverse an empty string returns empty string", () => {
  const inputString = "";
  const reversedString = reverseString(inputString);
  expect(reversedString).toBe("");
});

test("reverse a single character string", () => {
  const inputString = "a";
  const reversedString = reverseString(inputString);
  expect(reversedString).toBe("a");
});

test("reverse a string with all uppercase characters", () => {
  const inputString = "HELLO";
  const reversedString = reverseString(inputString);
  expect(reversedString).toBe("OLLEH");
});