const priceOrder = require('./refactor-after');

test('代码坏味道——发散式变坏——拆分阶段', () => {
  expect(priceOrder(
    {
      basePrice: 100,
      discountThreshold: 10,
      discountRate: 0.8
    },
    100,
    {
      discountThreshold: 99,
      discountedFee: 99,
      feePerCase: 101 
    }
  )).toBe(12700);
})
