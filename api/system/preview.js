import fs from 'fs'
/**
 * 文件预览
 */
export default {
  method: 'get',
  handler: async (ctx) => {
    ctx.type = "pdf";
    const reader = fs.createReadStream('./public/upload/22.pdf');
    ctx.body =reader

  }
}