import { getUserSq } from "../../sequelize/user.js";
/**
 * 注册
 */
export default {
  method: 'post',
  handler: async (ctx) => {
    const { username, password } = ctx.request.body;
    const userSq = await getUserSq();
    const [isRegister]=await  userSq.findAll({where:{username},attributes:['id']});
    if(isRegister){
     ctx.body= ctx.formatBody(1003);
    } else{
     const res= await userSq.create({username,password});
     ctx.body=  ctx.formatBody(1000, res);
    }
  }
}