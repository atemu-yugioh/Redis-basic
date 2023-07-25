const { redisClient } = require('../../dbs/init.redis')

class RedisService {
  static getKey = async (key) => {
    return await redisClient.get(key)
  }

  static setKey = async ({ key, value }) => {
    return await redisClient.set(key, value)
  }

  static incr = async (key) => {
    return await redisClient.incr(key)
  }

  static incrBy = async (key, increment) => {
    return await redisClient.incrBy(key, increment)
  }

  static expire = async (key, time) => {
    return await redisClient.expire(key, time)
  }

  static setNx = async ({ key, value }) => {
    return await redisClient.setNX(key, value)
  }

  static setExNx = async ({ key, value, time }) => {
    return await redisClient.set(key, value, {
      EX: time,
      NX: true
    })
  }

  static addDelayEventOrder = async (key, delay) => {
    const prefixRedisKey = 'delayOrder'
    return await redisClient.setEx(key, delay, prefixRedisKey)
  }
}

module.exports = RedisService
