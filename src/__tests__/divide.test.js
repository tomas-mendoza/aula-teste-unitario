const divide = require("../divide");

test('adds 2 / 2 to equal 1', () => {
  expect(divide(2, 2)).toBe(1);
});

test('adds -10 / 5 to equal -2', () => {
  expect(divide(-10, 5)).toBe(-2);
});

test('adds 5 / -5 to equal -1', () => {
  expect(divide(5, -5)).toBe(-1);
});

test('adds 3.5 / 1.5 to be close 2.33', () => {
  expect(divide(3.5, 1.5)).toBeCloseTo(2.33);
});