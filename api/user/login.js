import { resBody } from '../../response/index.js';
import { getUserSq } from "../../sequelize/user.js";
export default {
  method: 'post',
  handler: async (ctx) => {
    const { username, password } = ctx.request.body;
    const userSq = await getUserSq();
    const [user, created] = await userSq.findOrCreate({
      where: { username},
      defaults: {
        password
      }
    });
    ctx.body = resBody(1000, user);
  }
}