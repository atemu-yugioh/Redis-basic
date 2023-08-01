const RedisService = require('./redis.service')

class TravelokaService {
  static createOrder = async ({ orderId, userId }) => {
    const timeCancel = 20
    return await RedisService.setExNx({
      key: orderId,
      value: `userOrder:::${userId}`,
      time: timeCancel
    })
  }

  static cancelOrder = async (orderId) => {
    console.log(`Cancel order with orderId::: ${orderId}`)
  }
}

module.exports = TravelokaService
