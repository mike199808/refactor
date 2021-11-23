const Order = require('./refactor-after');

 
test('过长参数列表——以查询取代参数', () => {
  let order = new Order(120, 10);
  
  expect(order.finalPrice).toBe(1080)
});
