const refactorAfter = require('./refactor-after');


let outputData = ""; 
storeLog = inputs => (outputData += inputs); 
test('test console.log', () => {
  console["log"] = jest.fn(storeLog);
  refactorAfter({
    customer: 'mike',
    orders: [
        {amount: 10},
        {amount: 20},
    ]
})
  expect(outputData).toBe("***************************** Customer Ows *****************************name: mikeamount: 30due: Sun Dec 19 2021 00:00:00 GMT+0800 (中国标准时间)")
});
