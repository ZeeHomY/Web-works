const sea = {
  use(path, fn) {
    $.ajax({                   // 用$.ajax();模拟seajs的异步获取文件方式
      url: path,
      success (str) {

        function define (fn) {     // 在eval使代码生效前声明define
          fn();
        }

        eval(str);
      },
      error () {
        alert('失败');
      }
    });
  }
};
