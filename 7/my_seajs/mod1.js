define(function (require, exports, module) {

  console.log('执行');

  exports.a = 12;
  exports.b = 5;

  module.exports = {a: 12, b: 5}  // 与上面等价

  let mod2 = require('mod2.js');  // 异步引用 同步书写，库本身帮助解决
  let mod3 = require('mod3.js');

  exports.result =  mod2.num1 + mod3.num2;

});
