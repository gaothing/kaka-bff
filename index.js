import Koa from "koa";
import chalk from "chalk";
import json from "koa-json";
import koaStatic from "koa-static";
import koaDirRouter from "./middleware/koa-dir-router/index.js";
import config from "./config/index.js";
import redis from "./middleware/redis/index.js";
import formatBody from './middleware/format-body/index.js';
import { koaBody } from 'koa-body';
import views from 'koa-views'
import { resBody } from './response/index.js';
import { redisConfig } from './config/redis.js'
import easyMonitor from 'easy-monitor';

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
app.use(json({pretty: false, param: "pretty"}));


app.listen(config.port, () => {
  easyMonitor('KAKA');
  console.log(
    chalk.green.bold(`
KKKKKKKKK    KKKKKKK               AAA               KKKKKKKKK    KKKKKKK               AAA               
K:::::::K    K:::::K              A:::A              K:::::::K    K:::::K              A:::A              
K:::::::K    K:::::K             A:::::A             K:::::::K    K:::::K             A:::::A             
K:::::::K   K::::::K            A:::::::A            K:::::::K   K::::::K            A:::::::A            
KK::::::K  K:::::KKK           A:::::::::A           KK::::::K  K:::::KKK           A:::::::::A           
  K:::::K K:::::K             A:::::A:::::A            K:::::K K:::::K             A:::::A:::::A          
  K::::::K:::::K             A:::::A A:::::A           K::::::K:::::K             A:::::A A:::::A         
  K:::::::::::K             A:::::A   A:::::A          K:::::::::::K             A:::::A   A:::::A        
  K:::::::::::K            A:::::A     A:::::A         K:::::::::::K            A:::::A     A:::::A       
  K::::::K:::::K          A:::::AAAAAAAAA:::::A        K::::::K:::::K          A:::::AAAAAAAAA:::::A      
  K:::::K K:::::K        A:::::::::::::::::::::A       K:::::K K:::::K        A:::::::::::::::::::::A     
KK::::::K  K:::::KKK    A:::::AAAAAAAAAAAAA:::::A    KK::::::K  K:::::KKK    A:::::AAAAAAAAAAAAA:::::A    
K:::::::K   K::::::K   A:::::A             A:::::A   K:::::::K   K::::::K   A:::::A             A:::::A   
K:::::::K    K:::::K  A:::::A               A:::::A  K:::::::K    K:::::K  A:::::A               A:::::A  
K:::::::K    K:::::K A:::::A                 A:::::A K:::::::K    K:::::K A:::::A                 A:::::A 
KKKKKKKKK    KKKKKKKAAAAAAA                   AAAAAAAKKKKKKKKK    KKKKKKKAAAAAAA                   AAAAAAA
`)
  );
  console.log(
    chalk.blue("服务器启动成功，请访问："),
    chalk.blue.underline(`http://${config.host}:${config.port} `)
  );
});
