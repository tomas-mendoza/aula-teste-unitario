const subtract = require("../subtract");

test('adds 1 - 2 to equal 0', () => {
  expect(subtract(1, 2)).toBe(-1);
});

test('adds -10 - 5 to equal -15', () => {
  expect(subtract(-10, 5)).toBe(-15);
});

test('adds 5 - -5 to equal 10', () => {
  expect(subtract(5, -5)).toBe(10);
});

test('adds 0.3 - 0.2 to close 0.1', () => {
  expect(subtract(0.3, 0.2)).toBeCloseTo(0.1);
});