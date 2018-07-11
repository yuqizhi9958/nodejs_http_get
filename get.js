/*
    响应http请求
*/
// http模块
let http =require('http');

// 引入 url模块
let url = require('url');

// 引入querystring模块
let querystring =require('querystring');

// 开启服务器
let server = http.createServer((request,response)=>{

    // 解析url
    let parseUrl = url.parse(request.url);
    // console.log(parseUrl);
    // 获取get提交的数据
    // console.log(parseUrl.query); 没有最开始的问号
    // console.log(parseUrl.search); 有最开始的问号

    let result1 = querystring.parse(parseUrl.query);
    // let result2 = querystring.parse(parseUrl.search);
    console.log(result1);
    // console.log(result2);
    // 响应会去
    response.end('you come')
})
server.listen(8888,'127.0.0.1',()=>{
    console.log('listen to 127.0.0.1:8888 success');
})