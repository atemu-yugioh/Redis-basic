const RedisService = require('./redis/redis.service')
const redisPubSubService = require('./redis/redisPubSub.service')

class TravelokaService {
  static updateOrder = (orderId) => {
    console.log(`Logic Cancel Order::: ${orderId}`)
  }

  static createOrder = async (orderId) => {
    console.log(`Tạo đơn hàng thành công! Mã đơn hàng ${orderId}, vui lòng thanh toán trong vòng 30p !`)
    await redisPubSubService.publish('delayOrder', orderId)
    console.log(`Cache thời gian hết hạn của đơn hàng vào redis`)
    console.log(`Nếu hết hạn thì 1 sự kiện 'expired' sẽ được gửi đến channel`)
    console.log(`subscribe nhận được thông báo đó => lấy được OrderId thì thực hiện hủy đơn hàng`)
    const timeCancel = 10
    await RedisService.addDelayEventOrder(orderId, timeCancel)
  }
}

module.exports = TravelokaService
