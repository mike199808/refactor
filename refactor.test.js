const { client1 } = require('./refactor-after');

describe('代码坏味道——基本类型偏执——以对象取代基本类型', () => {
  test('test', () => {
    const result = client1();
    expect(result).toBe(2)
  })
})