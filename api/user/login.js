import { getUserSq } from "../../sequelize/user.js";
/**
 * 登录
 */
export default {
  method: 'post',
  handler: async (ctx) => {
    console.log('login')
    const { username, password } = ctx.request.body;
    console.log({ username, password })
    const userSq = await getUserSq();
    const [isRegister] = await userSq.findAll({ where: { username, password }, attributes: ['id', 'username', 'updatedAt'] });
    ctx.redis.set('loginStatus',username)
    ctx.body =isRegister?ctx.formatBody(1000, isRegister): ctx.formatBody(1001);
  }
}