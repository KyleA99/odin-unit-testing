const capitalize = require("./capitalizeString");

test("capitalize the first character of a string", () => {
  const inputString = "hello world";
  const capitalizedString = capitalize(inputString);
  expect(capitalizedString).toBe("Hello world");
});

test("capitalize empty string returns empty string", () => {
  const inputString = "";
  const capitalizedString = capitalize(inputString);
  expect(capitalizedString).toBe("");
});

test("capitalize single character string", () => {
  const inputString = "a";
  const capitalizedString = capitalize(inputString);
  expect(capitalizedString).toBe("A");
});

test("capitalize string with all uppercase characters", () => {
  const inputString = "HELLO";
  const capitalizedString = capitalize(inputString);
  expect(capitalizedString).toBe("HELLO");
});
