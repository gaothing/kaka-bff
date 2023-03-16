/**
 * 首页页面
 */
export default {
  method: 'get',
  handler: async (ctx) => {
    console.log(8,ctx.redirect)
    // const userSq = await getUserSq();
   
   await ctx.render('index', {
      title:'首页'
    })
  }
}