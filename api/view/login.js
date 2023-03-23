// import { getUserSq } from "../../sequelize/user.js";
/**
 * 登录页面
 */
export default {
  method: 'get',
  handler: async (ctx) => {
    // const redisUsername = ctx.redis.get('loginStatus');
    // redisUsername && ctx.redirect('/view/index');
   await ctx.render('login', {
      title:'登录页'
    })
  }
}