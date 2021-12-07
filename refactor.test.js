const { client } = require('./refactor-after');

describe('代码坏味道——循环语句——以管道取代循环', () => {

  test('client', () => {
    expect(client()).toEqual([{"city": "Bangalore", "phone": "+91 80 4064 9570"}, {"city": "Chennai", "phone": "+91 44 660 44766"}])
  })
})