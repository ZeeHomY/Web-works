const sea = {
  use(path, fn_end) {          // use的回调
    $.ajax({                   // 用$.ajax();模拟seajs的异步获取文件方式
      url: path,
      success (str) {

        function define (fn) {     // 在eval使代码生效前声明define

          let module = {
            exports: { }
          };

          fn(function () {         // 调用fn使模块define的回调函数执行.执行时会调用第一个参数函数，
                                   // 操作后两个对象参数，使得use的回调可以使用变化后的module对象

          }, module.exports, module);

          fn_end(module.exports);  //
        }

        eval(str);    //
      },
      error () {
        alert('失败');
      }
    });
  }
};
