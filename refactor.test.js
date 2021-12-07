const { plumages, speeds } = require('./refactor-after');

describe('代码坏味道——重复的switch——以多态取代条件表达式', () => {
  const birds = [
    {
      name: '1',
      type: 'EuropeanSwallow',
    },
    {
      name: '2',
      type: 'AfricanSwallow',
      numberOfCounts: 3,
    },
    {
      name: '3',
      type: 'NorwegianBlueParrot',
      isNailed: false,
      voltage: 100,
    },
    {
      name: '4',
      type: 'unkonw',
    }
  ]
  test('test-plumages', () => {
    const result = plumages(birds);
    expect(result).toEqual([["1", "average"], ["2", "tired"], ["3", "beautiful"], ["4", "unknown"]]);
  })
  test('test-speeds', () => {
    const result = speeds(birds);
    expect(result).toEqual([["1", 35], ["2", 34], ["3", 20], ["4", null]]);
  })
})