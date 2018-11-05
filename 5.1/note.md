## ES6

### generator 函数生成器

yield
1.阶段性写入新值
2.阶段性读取返回值

### 模块化 “重用”

- 模块化框架（seaJS）按需加载 使用的是“AJAX”异步方式
  所以需要本地服务localhost/

  wamp运行后 localhost 可直接打开。如找不到 ，则查看系统服务列表wamp64aphe服务是否启动，尝试启动。如无法正常启动，多为端口被占用。尝试重新“安装”服务。
  -- -- --dos提示：
  Your port 80 is actually used by :

  Server: Microsoft-IIS/10
   确认被占用。在服务中关闭World Wide Web Publishing Service 服务。重启wamp服务后，打开正常。

## node模块化（CMD模式）

- seaJS和requireJS的用法被Node借鉴
-
  “html”中（直接执行）引js: use()
  js中（模块中）引js：require()

- seaJS、requireJS中
  require('./1.js')可以有‘./’，也可不用。
  但在node中必须有‘./’，强制在当前目录下寻找，不加会报错。
  （因为node中不仅有自定义模块，也有系统模块（http模块。。。），可能会有同名系统模块。
  不加‘./’则为引用系统.so必须加‘./’。）
  手动建立node_modules文件夹放入js文件，则不用加‘./’。（必须省略）

1. 不需要像saeJS、requireJS一样写defined
2. 有exports、requier、module
3. 引用自定义模块
   1. 放到node_modules文件夹(官方推荐)
   2. 前面加‘./’

- 初始化自己的包 init

  1. 进到创建好的文件夹中
      * 测试驱动开发
  2. 按照步骤生成package.json（有入口路径）
  3. 放到node_modules目录下
  4. 在文件中requier使用
