const {Account, AccountType} = require('./refactor-after');

describe('代码坏味道——依赖情结——搬移函数', () => {
  test('普通账号贷款额度', () => {
    let input = {
      name: 'mike',
      type: new AccountType('normal')
    }
    const result = new Account(input);
    expect(result.loanAmount).toBe(1000)
  })
  test('vip账号贷款额度', () => {
    let input = {
      name: 'mike',
      type: new AccountType('vip')
    }
    const result = new Account(input);
    expect(result.loanAmount).toBe(2000)
  })
})