## 答疑

### seaJS、requireJS
1. js文件里（模块里）
  define(function (reuire, exports, module){
      require('2.js');
  });

2. 在html文件里
  seajs.use('lib/1.js', function (mod){});

### 手写seaJS方式组件
seajs中引用文件方式，为类ajax方式。
