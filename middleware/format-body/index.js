
/**
 *ctx添加 response body格式化函数
 */
export default (resBody) => {
  return async (ctx, next) => {
    ctx.formatBody = resBody;
    await next()
  }
}