const { reportLines } = require('./refactor-after');

describe('代码坏味道——冗赘的元素——内联函数', () => {

  test('reportLines', () => {
    const aCustomer = {
      name: 'mike',
      location: '北京',
    }
    expect(reportLines(aCustomer)).toEqual([["name", "mike"], ["location", "北京"]]);
  })
})