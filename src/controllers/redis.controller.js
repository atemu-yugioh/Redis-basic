const RedisService = require('../services/redis.service')

class RedisController {
  setKeyCtr = async (req, res, next) => {
    const { key, value } = req.body
    return res.status(200).json({
      message: 'OK',
      data: await RedisService.setKey({ key, value })
    })
  }

  getKeyCtr = async (req, res, next) => {
    const { key } = req.query
    return res.status(200).json({
      message: 'OK',
      data: await RedisService.getKey(key)
    })
  }
}

module.exports = new RedisController()
