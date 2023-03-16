import fs from 'fs'
/**
 * 文件上传
 */
export default {
  method: 'post',
  handler: async (ctx) => {
    const file = ctx.request.files.file;
    const reader = fs.createReadStream(file.filepath);
    const write =fs.createWriteStream('./public/upload/' + file.originalFilename);
    reader.pipe(write);
    ctx.body =ctx.formatBody(1000,'上传成功～') ;

  }
}