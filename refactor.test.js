const {client1, client2, client3} = require('./refactor-after');

describe('代码坏味道——霰弹式修改——函数组合成类', () => {
  test('client1', () => {
    expect(client1()).toBe(100850);
  })
  test('client2', () => {
    expect(client2()).toBe(98833);
  })
  test('client3', () => {
    expect(client3()).toBe(100850);
  })
})