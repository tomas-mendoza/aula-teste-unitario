const isGreater = require('../isGreater');

test('adds 3 and 8 to be false', () => {
  expect(isGreater(3, 8)).toBeFalsy();
});

test('adds 5 and 1 to be true', () => {
  expect(isGreater(5, 1)).toBeTruthy();
});

test('adds 0 and 0 to not be true', () => {
  expect(isGreater(0, 0)).not.toBe(true);
});