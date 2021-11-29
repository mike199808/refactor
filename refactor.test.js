const { Person } = require('./refactor-after');

describe('代码坏味道——数据泥团——提炼类', () => {
  test('提炼类', () => {
    const result = new Person('mike', 123, 456789);
    expect(result.telephoneNumber).toBe("mike：(123)456789")
  })
})