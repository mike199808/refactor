const {getDefaultOwner, setDefaultOwner} = require('./refactor-after');

 
test('过长参数列表——封装变量——通过get函数获取全局数据', () => {    
  expect(getDefaultOwner()).toEqual({"firstName": "mike1", "lastName": "mike2"})
});
test('过长参数列表——封装变量——通过set函数来设置全局数据', () => {
  setDefaultOwner('mike1set','mike1set');
  expect(getDefaultOwner()).toEqual({
    firstName: 'mike1set',
    lastName: 'mike1set'
  })
})