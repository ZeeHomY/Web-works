const sea = {
  use(path, fn_end) {          // use的回调
    $.ajax({                   // 用$.ajax();模拟seajs的异步获取文件方式
      url: path,
      success (str) {

        function define (fn) {     // 在eval使代码生效前声明define

          let module = {
            exports: { }
          };

          // 调用fn使模块define的回调函数执行.执行时会调用第一个参数函数，
          // 操作后两个对象参数，使得use的回调可以使用变化后的module对象
          fn(function () {            // 定义require

          }, module.exports, module);

          fn_end(module.exports);  //
        }

        // 软编译 读取根模块内部所有require
        let tmp = str.substring(str.indexOf('{') + 1, str.lastIndexOf('}'));   // 获取函数体内部的内容

        let arr = tmp.match(/require\([^\(\)]+\)/g).map(item => {

          if (item.indexOf('"') !== -1) {
            return item.substring(item.indexOf('"') + 1, item.lastIndexOf('"'));
          } else {
            return item.substring(item.indexOf("'") + 1, item.lastIndexOf("'"));
          }

        });

        alert(arr);

        // 执行根模块
        eval(str);
      },
      error () {
        alert('失败');
      }
    });
  }
};
