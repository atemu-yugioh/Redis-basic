const RedisService = require('../services/redis.service')

// cứ vào là set lại thời gian
const rateLimiterV1 = (secondsLimit, limitAmount) => {
  return async (req, res, next) => {
    // const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    const ip = '192.168.0.1'
    const response = await RedisService.setRateLimitTransaction(ip, secondsLimit)

    if (response[0] > limitAmount) {
      return res.status(429).json({
        message: `too many requests in ${secondsLimit}s. try again later`
      })
    }

    next()
  }
}

// chỉ set thời gian lần đầu
const rateLimiterV2 = (secondsLimit, limitAmount) => {
  return async (req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    const numRequest = await RedisService.incr(ip)

    if (numRequest === 1) {
      await RedisService.expire(ip, secondsLimit)
    }

    if (numRequest > limitAmount) {
      return res.status(429).json({
        message: `too many requests in ${secondsLimit}s. try again later`
      })
    }

    next()
  }
}

module.exports = {
  rateLimiterV1,
  rateLimiterV2
}
