# ES6

- 模块化框架（seaJS）按需加载 使用的是“AJAX”异步方式
  所以需要本地服务localhost/

  wamp运行后 localhost 可直接打开。如找不到 ，则查看系统服务列表wamp64aphe服务是否启动，尝试启动。如无法正常启动，多为端口被占用。尝试重新“安装”服务。
  -- -- --dos提示：
  Your port 80 is actually used by :

  Server: Microsoft-IIS/10
   确认被占用。在服务中关闭World Wide Web Publishing Service 服务。重启wamp服务后，打开正常。