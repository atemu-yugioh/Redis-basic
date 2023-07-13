const { OK } = require('../core/success.response')
const RedisService = require('../services/redis.service')

class RedisController {
  setKeyCtr = async (req, res, next) => {
    const { key, value } = req.body
    new OK({
      message: 'OK',
      data: await RedisService.setKey({ key, value })
    }).send(res)
  }

  getKeyCtr = async (req, res, next) => {
    new OK({
      message: 'OK',
      data: await RedisService.getKey('newKey')
    }).send(res)
  }
}

module.exports = new RedisController()
