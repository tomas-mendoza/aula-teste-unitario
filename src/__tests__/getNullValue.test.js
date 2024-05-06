const getNullValue = require('../getNullValue');

test('should return null value', () => {
  expect(getNullValue()).toBeNull();
});