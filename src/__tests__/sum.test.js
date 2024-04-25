const sum = require('../sum');

test('adds 2 + 2 to equal 4', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds -10 + 5 to equal -5', () => {
  expect(sum(-10, 5)).toBe(-5);
});

test('adds 5 + -5 to equal 0', () => {
  expect(sum(5, -5)).toBe(0);
});

test('adds 0.1 + 0.2 to close 0.3', () => {
  expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
});