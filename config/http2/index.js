import fs from 'fs'
export default async ()=> await ({
  key: fs.readFileSync('/config/http2/keys/server.key'),
  cert: fs.readFileSync('/config/http2/keys/server.crt'),
})