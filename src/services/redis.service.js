const { redisClient } = require('../dbs/init.redis.newVersion')

class RedisService {
  static setKey = async ({ key, value }) => {
    return await redisClient.set(key, value)
  }

  static getKey = async (key) => {
    return await redisClient.get(key)
  }

  static setRateLimitTransaction = async (ip, secondsLimit) => {
    return await redisClient.multi().incr(ip).expire(ip, secondsLimit).exec()
  }

  static incr = async (key) => {
    return await redisClient.incr(key)
  }

  static expire = async (key, time) => {
    return await redisClient.expire(key, time)
  }

  static addDelayEventOrder = async (key, delay) => {
    return await redisClient.setEx(key, delay, 'order')
  }
}

module.exports = RedisService
