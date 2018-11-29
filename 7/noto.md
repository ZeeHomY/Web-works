## 答疑

### seaJS、requireJS
1. js文件里（模块里）
  define(function (reuire, exports, module){
      require('2.js');
  });

2. 在html文件里
  seajs.use('lib/1.js', function (mod){});

### 手写seaJS方式组件
seajs中引用文件方式，为类ajax方式。 (有关ajax2.0)

异步引用 同步书写。
软编译

### 手写Promise
- 实质 状态机（所有的状态机都是有限状态机）
1. 当状态改变时会自动调用之前挂起的队列（对象数组元素中的函数）
2. then执行时直接运行参数函数，并且会获取到相应的参数

### base64 地址图片 可以降低服务器负载（不去服务器请求），从内存中读取
    base64转换会增加30%（由编码方式导致）
    小图片适用转换，大图不建议转换
    【与二进制 对比】base64 是string可见可用;二进制通常为图片内容（不去人为操作）