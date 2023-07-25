const asyncHandler = require('../helpers/asyncHandler')
const RedisService = require('../services/redis/redis.service')

const rateLimiter = (secondLimit, limitAmount) => {
  return asyncHandler(async (req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    const numRequest = await RedisService.incr(ip)

    if (numRequest === 1) {
      await RedisService.expire(ip, secondLimit)
    }

    if (numRequest > limitAmount) {
      return res.status(429).json({
        message: `Too many request in ${secondLimit}s. Try again later`
      })
    }

    next()
  })
}

module.exports = rateLimiter
