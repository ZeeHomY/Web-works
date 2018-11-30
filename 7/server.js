const http = require('http');    // 系统自带
const io = require('socket.io');

// 创建http协议 
let httpServer = http.createServer(/* function (req, res) {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true'); 

} */);
httpServer.listen(3000);            // listen 等待客户端发送请求；端口 用来区分服务器上的众多服务

// 创建websocket服务
let wsServer = io.listen(httpServer);

wsServer.on('connection', function (sock) {      // 当有人来连接时
    // sock.on('a', function (num1, num2) {
    //     console.log(`接到浏览器数据：${num1}, ${num2}`);
    // });

    setTimeout(() => {
        sock.emit('eee', Math.random());
    }, 500);
});