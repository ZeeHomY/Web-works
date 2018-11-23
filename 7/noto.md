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