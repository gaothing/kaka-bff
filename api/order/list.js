import { getOderSq } from "../../sequelize/order.js";
export default {
  method: 'get',
  handler: async (ctx, app) => {
    // redis 的使用
    // const kaka =await ctx.redis.get('kaka');
    // await ctx.redis.set('kaka', 999);
    const orderSq = await getOderSq();
    const order = await orderSq.findAll({
      where: {
        uid:ctx.query.uid
      }
    });
    ctx.body = ctx.formatBody(1000, order);
  }
}