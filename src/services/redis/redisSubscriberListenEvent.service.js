const TravelokaService = require('../traveloka.service')
const redisPubSubService = require('./redisPubSub.service')

const channels = ['delayOrder', '__keyevent@0__:expired']

const objectHandleEvent = {
  ['delayOrder']: TravelokaService.updateOrder,
  ['__keyevent@0__:expired']: TravelokaService.updateOrder
}

class RedisSubscriberListenEvent {
  constructor() {
    redisPubSubService.pSubscribe(channels, (message, channel) => {
      RedisSubscriberListenEvent.handleEvent(channel, message)
    })
  }

  static handleEvent = async (channel, payload) => {
    return await objectHandleEvent[channel](payload)
  }
}

module.exports = new RedisSubscriberListenEvent()
