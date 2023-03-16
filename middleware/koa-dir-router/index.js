
import path from "path";
import glob from "glob";


/**
 * 文件路由
 */
export default (url,app) => {
  const fileList = glob.sync(`${url}/**/*.js`);
  const routerMap = new Map();
  fileList.forEach(async (item) => {
    const module = await import(path.resolve(item));
    const {method, handler} = module.default;
    routerMap.set(`_${method}_${item.slice(1, -3)}`.toLowerCase(), handler);
  });

  return async (ctx, next) => {
    const { path, method, header } = ctx;
    console.log(header)
    
    const handler = routerMap.get(`_${method}_${path}`.toLowerCase());
    if (method.toLowerCase() === "post"&& (!header['content-type']?.padStart('multipart/form-data'))) {
      const params = await getData(ctx);
      ctx.request.body = JSON.parse(params);
    }
    handler ? await handler(ctx,app) : (ctx.body = 404);
    return await next();
  };
};
function getData(ctx) {
  return new Promise(function (resolve, reject) {
    try {
      let str = "";
      ctx.req.on("data", function (chunk) {
        str += chunk;
      });
      ctx.req.on("end", function (chunk) {
        resolve(str);
      });
    } catch (err) {
      reject(err);
    }
  });
}