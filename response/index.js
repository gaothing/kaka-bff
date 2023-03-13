import fail from "./message/fail.js"
import success from "./message/success.js"
export const resBody = (code, data) => {
  return {
    code,
    message:[...fail,...success].find(item=>item.code===code).message,
    data
  }
}