/**
 * 首页页面
 */
export default {
  method: 'get',
  handler: async (ctx) => {

   await ctx.render('index', {
      title:'首页'
    })
  }
}