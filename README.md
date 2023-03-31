# kaka-bff

该项目是一个node项目，集成文件路由、redis、mysql、sequelize、页面模版、https、http2、jwt等

## http2和https的node服务器的搭建

openssl win32(64)下载：http://slproweb.com/products/Win32OpenSSL.html

配置环境变量path

知道了原理后，我们在终端生成证书和私钥吧。
```
（1）openssl genrsa -out server.key 1024 //生成服务器私钥

（2）openssl rsa -in server.key -pubout -out server.pem  // 生成公钥

  //自己扮演CA机构，给自己服务器颁发证书，CA机构也需要自己私钥，CSR文件(证书签名请求文件)，和证书

 (3)  openssl genrsa -out ca.key 1024            //生成CA 私钥
      openssl req -new -key ca.key -out ca.csr   //生成CA CSR文件
      openssl x509 -req -in ca.csr -signkey ca.key  -out ca.crt  //生成CA 证书

 //生成证书签名请求文件
 (4) openssl req -new -key server.key -out server.csr //生成server CSR文件
  
 //向自己的机构请求生成证书
 (5) openssl x509 -req -CA  ca.crt -CAkey ca.key -CAcreateserial -in server.csr   -out server.crt   //生成server 证书


```
🔗[参考链接](https://www.cnblogs.com/eret9616/p/9249192.html)

### redis
先安装 redis，启动项目前启动redis
 - 启动命令`redis-server`

### 监控
打开你的浏览器，访问 http://localhost:12333 ，即可看到进程界面

关于定制化开发、通用配置项以及如何动态更新配置项详见官方文档
### jwt 鉴权

## 启动项目
```
//安装依赖
pnpm i
//启动项目
pnpm run dev
```

访问：[https://localhost:4300/view/login](https:localhost:4300/view/login)