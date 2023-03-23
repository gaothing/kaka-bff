import chalk from "chalk";
import easyMonitor from 'easy-monitor';
import config from "../index.js";
export default () => {
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
}