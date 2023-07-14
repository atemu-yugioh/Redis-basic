const TravelokaService = require('../Traveloka.service')
const redisPubSubService = require('./redisPubSub.service')
// const keyEventExpired = '__keyevent@0__:expired'
const keySubscribes = ['__keyevent@0__:expired', 'delayOrder']

const objectHandleEvent = {
  delayOrder: TravelokaService.updateOrder,
  ['__keyevent@0__:expired']: TravelokaService.updateOrder
}

class RedisSubscriberListenEvent {
  constructor() {
    // nằm đây lắng nghe sự kiện đơn hàng hết thời gian thanh toán
    redisPubSubService.pSubscirbe(keySubscribes, (message, channel) => {
      RedisSubscriberListenEvent.handleEvent(channel, message)
    })
  }

  static handleEvent = async (channel, payload) => {
    return await objectHandleEvent[channel](payload)
  }
}

module.exports = new RedisSubscriberListenEvent()
