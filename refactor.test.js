const refactorAfter = require('./refactor-after');

test('改变函数声明', () => {
  expect(refactorAfter(1)).toBe(6.283185307179586);
});