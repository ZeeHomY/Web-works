const http = require('http');
const io = require('socket.io');

// 创建http协议 
let httpServer = http.createServer();
httpServer.listen(8080);            // 端口

// 创建websocket服务
let wsServer = io.listen(httpServer);

wsServer.on('connection', function (sock) {
    sock.on('a', function (num1, num2) {
        console.log(`接到浏览器数据：${num1}, ${num2}`);
    });
});