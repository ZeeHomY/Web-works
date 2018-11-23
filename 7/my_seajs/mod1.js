define(function (require, exports, module) {

  console.log('执行');

  exports.a = 12;
  exports.b = 5;

  module.exports = {a: 12, b: 5}  // 与上面等价

});
