const mergeObject = require('./refactor-after');

test('代码坏味道——可变数据——函数式编程1', () => {
   let target = {
     a: 1
   }
   let source = {
     b: 1
   }
   const result = mergeObject(target, source);
   expect(result).toEqual({
     a: 1,
     b: 1,
   })
})
test('代码坏味道——可变数据——函数是编程2', () => {
  let target = {
    a: 1,
  }
  let source = {
    b: 1
  }
  mergeObject(target, source);
  expect(target).toEqual({
    a: 1,
  })
})