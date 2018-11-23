const sea = {
  use(path, fn_end) {          // use的回调
    $.ajax({                   // 用$.ajax();模拟seajs的异步获取文件方式
      url: path,
      success (str) {

        function parseStr(str, fn_end) {     // 封装供递归使用 伪代码

          function define (fn) {     // 在eval使代码生效前声明define

            let module = {
              exports: { }
            };

            // 调用fn使模块define的回调函数执行.执行时会调用第一个参数函数，
            // 操作后两个对象参数，使得use的回调可以使用变化后的module对象
            fn(function (path) {            // 定义require

            }, module.exports, module);

            fn_end(module.exports);  //
          }

          // 先 软编译 读取父模块内部所有require
          let tmp = str.substring(str.indexOf('{') + 1, str.lastIndexOf('}'));   // 获取函数体内部的内容

          let arr = tmp.match(/require\([^\(\)]+\)/g).map(item => {              // match生成[require(),require()]数组

            if (item.indexOf('"') !== -1) {                                       // 映射出只留字符串内容的数组
              return item.substring(item.indexOf('"') + 1, item.lastIndexOf('"'));
            } else {
              return item.substring(item.indexOf("'") + 1, item.lastIndexOf("'"));
            }

          });

          let i = 0;
          let json = {};     // 存放模块中所有require的路径：代码
          function next() {
            $.ajax({
              url: arr[i],
              success (modstr) {

                parseStr(modstr, function (mod) {

                  json[arr[i]] = mod;             // key(地址)
                  i++;
                  if (i === arr.lenght) {

                    // *替换require语句为模块内容
                    // str.replace('require(xxx)', json[arr[i]])

                    // 再 执行父模块
                    eval(modstr);

                  } else {
                    next();
                  }
                });

              }
            });
          }
        }

        parseStr(str, fn_end);
      },
      error () {
        alert('失败');
      }
    });
  }
};
