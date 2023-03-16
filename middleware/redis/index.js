import Redis from 'ioredis'
/**
 * redis
 */
export default (redisConfig) => { 
  let redisClient = null;
  return async (ctx, next) => {
    async function redisConnect() {
      if (redisClient) return redisClient;
      redisClient = new Redis( redisConfig);
      return redisClient
    }
    
    ctx.redis =await redisConnect();
    return await next()

  }
}