const redisPubsubService = require('./redis.pubsub.service')

const keyPatterns = ['__keyevent@0__:expired', 'delayOrder']

const objectHandleEvent = {
  ['delayOrder']: (message) => {
    console.log(`Event: delayOrder`, message)
  },
  ['__keyevent@0__:expired']: console.log('handle key space notification')
}

class RedisSubscriberListenEvent {
  constructor() {
    redisPubsubService.pSubscribe(keyPatterns, (message, channel) => {
      RedisSubscriberListenEvent.handleEvent(channel, message)
    })
  }

  static handleEvent = async (channel, message) => {
    return await objectHandleEvent[channel](message)
  }
}

module.exports = new RedisSubscriberListenEvent()
