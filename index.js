import Koa from "koa";
import json from "koa-json";
import koaStatic from "koa-static";
import { koaBody } from 'koa-body';
import views from 'koa-views'
import http2 from "http2";
import fs from 'fs'
import http2Options from './config/http2/index.js'
import koaDirRouter from "./middleware/koa-dir-router/index.js";
import config from "./config/index.js";
import listenCallback from "./config/log/listen.js";
import redis from "./middleware/redis/index.js";
import formatBody from './middleware/format-body/index.js';
import { resBody } from './response/index.js';
import { redisConfig } from './config/redis.js'


const app = new Koa();
app.use(views('./view', {
  extension:'ejs'
}))
app.use(koaBody({
  multipart: true,
  formidable: {
    maxFieldsSize: 200 * 1024 * 1024
  }
}));
app.use(formatBody(resBody));
app.use(redis(redisConfig));
app.use(koaStatic("."));
app.use(koaDirRouter("./api",false));
app.use(json({ pretty: false, param: "pretty" }));
//创建 http2 服务器
const server = http2.createSecureServer({
  key: fs.readFileSync('./config/http2/keys/server.key'),
  cert: fs.readFileSync('./config/http2/keys/server.crt'),
},
  app.callback());
//启动服务器
server.listen(config.port, listenCallback);
