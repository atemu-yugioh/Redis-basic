const RedisService = require('../services/redis/redis.service')

class OrderController {
  setQuantity = async (req, res, next) => {
    return res.status(200).json({
      message: 'OK',
      data: await RedisService.setKey({ key: req.body.name, value: req.body.quantity })
    })
  }

  getQuantity = async (req, res, next) => {
    return res.status(200).json({
      message: 'OK',
      data: await RedisService.getKey(req.body.name)
    })
  }

  incrementQuantity = async (req, res, next) => {
    return res.status(200).json({
      message: 'OK',
      data: await RedisService.incrBy(req.body.name, req.body.increment)
    })
  }

  setUserPreOrder = async (req, res, next) => {
    return res.status(200).json({
      message: 'OK',
      data: await RedisService.setExNx({
        key: req.body.userId,
        value: 'preOrder',
        time: 30
      })
    })
  }
}

module.exports = new OrderController()
