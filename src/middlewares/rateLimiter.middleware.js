const asyncHandler = require('../helpers/asyncHandler')
const RedisService = require('../services/redis.service')

const rateLimiter = (secondsLimit, limitAmount) => {
  return asyncHandler(async (req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    const numRequest = await RedisService.incr(ip)

    if (numRequest === 1) {
      await RedisService.expire({ key: ip, time: secondsLimit })
    }

    if (numRequest > limitAmount) {
      return res.status(429).json({
        message: 'Many too request, please try again'
      })
    }

    next()
  })
}

module.exports = rateLimiter
