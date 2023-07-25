const RedisService = require('./redis/redis.service')
const redisPubSubService = require('./redis/redisPubSub.service')

class TravelokaService {
  static updateOrder = async (orderId) => {
    console.log(`Login cancel order::: ${orderId}`)
  }

  static createOrder = async (orderId) => {
    await redisPubSubService.publish('delayOrder', orderId)
    const timeCancel = 10
    await RedisService.addDelayEventOrder(orderId, timeCancel)
  }
}

module.exports = TravelokaService
