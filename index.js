import Koa from "koa";
import chalk from "chalk";
import json from "koa-json";
import koaStatic from "koa-static";
import koaDirRouter from "./middleware/koa-dir-router/index.js";
import config from "./config/index.js";
import redis from "./middleware/redis/index.js";
const app = new Koa();
// console.log(redis)
app.use(redis(app));
app.use(koaStatic("."));

app.use(koaDirRouter("./api"));
app.use(json({pretty: false, param: "pretty"}));
app.use((ctx) => {
  // console.log(ctx.body);
});

app.listen(config.port, () => {
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
