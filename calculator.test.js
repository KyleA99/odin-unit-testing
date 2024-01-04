import calculator from "./calculator";

test("add two numbers", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("subtract two numbers", () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});

test("multiply two numbers", () => {
  expect(calculator.multiply(4, 2)).toBe(8);
});

test("divide two numbers", () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

test("divide by zero returns an error message", () => {
  expect(calculator.divide(6, 0)).toBe('Cannot divide by zero');
});
