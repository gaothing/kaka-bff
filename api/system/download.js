import send from 'koa-send'
/**
 * 文件下载
 */
export default {
  method: 'get',
  handler: async (ctx) => {
    const name = ctx.query.name;
    const path = `public/upload/${name}`;
    ctx.attachment(path);
    await send(ctx, path);

  }
}