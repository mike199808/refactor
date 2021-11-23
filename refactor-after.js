// global.js
const defaultOwner = {
    firstName: 'mike1',
    lastName: 'mike2'
}
// 给全局数据设置get函数
function getDefaultOwner() {
    return Object.assign({}, defaultOwner);
}
// 给全局数据设置set函数
function setDefaultOwner(firstName, lastName) {
    defaultOwner.firstName = firstName;
    defaultOwner.lastName = lastName;
}

module.exports = {
    getDefaultOwner,
    setDefaultOwner,
};
