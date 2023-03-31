import { getUserSq } from "../../sequelize/user.js";
import jsonwebtoken  from 'jsonwebtoken'
/**
 * 登录
 */
export default {
  method: 'post',
  handler: async (ctx) => {
    const { username, password } = ctx.request.body;
    const userSq = await getUserSq();
    const [isRegister] = await userSq.findAll({ where: { username, password }, attributes: ['id', 'username', 'updatedAt'] });
    ctx.redis.set('loginStatus', username)
    const token = jsonwebtoken.sign({ username }, 'your_secret_key',{expiresIn:'1h'});
    // ctx.body = { token };
    console.log({ token });
    ctx.body =isRegister?ctx.formatBody(1000,{...isRegister.dataValues,token}): ctx.formatBody(1001);
  }
}