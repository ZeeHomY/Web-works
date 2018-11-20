const sea = {
  use(path, fn) {
    $.ajax({                   // 用$.ajax();模拟seajs的异步获取文件方式
      url: path,
      success (str) {
        alert();
      },
      error () {
        alert('失败');
      }
    });
  }
};
