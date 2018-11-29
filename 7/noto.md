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
    编码方式：base64、utf-8、7-bit等

### RESTful
    是一种习惯.
    1. 统一性：访问所有的数据使用统一的接口。eg.增删改各种数据（用户、商品、留言等）
    2. 通过method + url区分接口

### ajax
  通过ajax请求数据，读取用户是否登录过，如果有登录信息，会跳转到之后的页面。（天猫）

### 浏览器端的加密 
  浏览器的唯一认识的加密方式HTTPS(或者VPN方式)
  - 将JS加密再解秘，浏览器依然能看到

### babel-preset
  cnpm search webpack-preset-env

### WWW-Authemticate认证
  多项配置
  eg. Aphch 配置
  会有原生对话框，输入用户名密码

### 多页应用
  使用phonegap、APIclude时都为多页面应用

### decorator装饰者模式（32种设计模式）
  分三大类：构建式、
  装饰者模式 属于创建模式
  在老的类上 加装新的属性、方法
  在对象生成之后，再给对象加东西（JS原生符合装饰者模式）

## WebSocket
1. 双工
2. HTML5带入的（不兼容IE78）
3. 常用

- socket.io: 既给node用。也给前台用
  1. 服务端：
    - 先要有http服务。
    - 再有ws服务。
  2. 浏览器：

- 是基于http协议的

socket.emit('名字'，);    // 发射，发行，发送,发布
socket.on('on', function () { });      // 