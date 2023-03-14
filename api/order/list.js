import { resBody } from '../../response/index.js';
import { getOderSq } from "../../sequelize/order.js";
export default {
  method: 'get',
  handler: async (ctx, app) => {
    const kaka =await ctx.redis.get('kaka');
    console.log({ kaka });
    await ctx.redis.set('kaka', 999);

    // const env = getEnv();
    console.log(11,process.env.NODE_ENV)
    // const userSq = await userSq();
    // userSq.find
    // redis(app);
    const orderSq = await getOderSq();
    const order = await orderSq.findAll({
      where: {
        uid:ctx.query.uid
      }
    });
    ctx.body = resBody(1000, order);
  }
}