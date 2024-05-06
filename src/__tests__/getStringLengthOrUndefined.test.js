const getStringLengthOrUndefined = require('../getStringLengthOrUndefined');

test('adds "banana" to be defined', () => {
  expect(getStringLengthOrUndefined('banana')).toBeDefined();
});

test('adds "" to be undefined', () => {
  expect(getStringLengthOrUndefined('')).toBeUndefined();
});

test('adds "tomato" to be equal 6', () => {
  expect(getStringLengthOrUndefined('tomato')).toEqual(6);
});