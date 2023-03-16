import fs from 'fs';
   
/**
 * 文件上传
 */
export default {
  method: 'post',
  handler: async (ctx) => {
    const file = ctx.request.files.file;
    const data = fs.readFileSync(file.filepath);
    fs.writeFileSync('./public/upload/' + file.originalFilename,data);
    ctx.body =ctx.formatBody(1000,'上传成功～') ;
  }
}