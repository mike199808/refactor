const { client } = require('./refactor-after');

describe('代码坏味道——夸夸奇谈通用性——内联类', () => {
  test('client', () => {
    expect(client()).toEqual('company2: 33');
  })
})