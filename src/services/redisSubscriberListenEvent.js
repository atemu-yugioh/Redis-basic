const redisPubSubService = require('./redis.pubsub.service')
const TravelokaService = require('./traveloka.service')

const keyPatterns = ['__keyevent@0__:expired', 'delayOrder']

const objectHandleEvent = {
  ['delayOrder']: (message) => {
    console.log(`Event: delayOrder`, message)
  },
  ['__keyevent@0__:expired']: TravelokaService.cancelOrder
}

class RedisSubscriberListenEvent {
  constructor() {
    redisPubSubService.pSubscribe(keyPatterns, (message, channel) => {
      RedisSubscriberListenEvent.handleEvent(channel, message)
    })
  }

  static handleEvent = async (channel, message) => {
    return await objectHandleEvent[channel](message)
  }
}

module.exports = new RedisSubscriberListenEvent()
