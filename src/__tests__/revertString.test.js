const revertString = require('../revertString');

test('add "banana" to match "ananab"', () => {
  expect(revertString('banana')).toMatch('ananab');
});

test('add "pie" to contain "eip', () => {
  expect(revertString('pie')).toContain('eip');
});