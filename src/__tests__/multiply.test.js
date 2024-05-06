const multiply = require("../multiply")

test('adds 2 * 2 to equal 4', () => {
  expect(multiply(2, 2)).toEqual(4);
});

test('adds -10 * 5 to equal -15', () => {
  expect(multiply(-10, 5)).toBe(-50);
});

test('adds 5 * -5 to equal 10', () => {
  expect(multiply(5, -5)).toBe(-25);
});

test('adds 0.3 * 0.2 to close 0.6', () => {
  expect(multiply(0.3, 0.2)).toBeCloseTo(0.06);
});

test('adds 5 * 5 to be greater than 23', () => {
  expect(multiply(5, 5)).toBeGreaterThan(23);
});

test('adds 3 * 9 to be defined', () => {
  expect(multiply(3, 9)).toBeDefined();
});