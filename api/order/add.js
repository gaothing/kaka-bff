import { resBody } from '../../response/index.js';
import { getOderSq } from "../../sequelize/order.js";
export default {
  method: 'post',
  handler: async (ctx) => {
    const { orderName,total ,uid } = ctx.request.body;
    const orderSq = await getOderSq();
    const order = await orderSq.create({
      uid,
      orderName,
      total
    });
    ctx.body = resBody(1000, order);
  }
}