import Redis from 'ioredis'
import redisConfig from './config.js'
export default () => { 
  let redisClient = null;
  return async (ctx, next) => {
    async function redisConnect() {
      if (redisClient) return redisClient;
      redisClient = new Redis(redisConfig());
      console.log('Redis 启用');
      return redisClient
    }
    
   
    ctx.redis =await redisConnect();
    return await next()

  }
}