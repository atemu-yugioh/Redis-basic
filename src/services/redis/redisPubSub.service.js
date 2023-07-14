const { redisClient } = require('../../dbs/init.redis.newVersion')

class RedisPubSubService {
  constructor() {
    this.subscriber = redisClient.duplicate()
    this.publisher = redisClient.duplicate()
    this.connect()
  }

  connect() {
    this.subscriber
      .connect()
      .then(() => {
        console.log('subscriber connected')
      })
      .catch((err) => {
        console.log('Error:::', err)
      })

    this.publisher
      .connect()
      .then(() => {
        console.log('publisher connected')
      })
      .catch((err) => {
        console.log('Error:::', err)
      })
  }

  publish = async (channel, message) => {
    await this.publisher.publish(channel, message)
  }

  subscribe = async (channel, callback) => {
    await this.subscriber.subscribe(channel, (message, channel) => callback(message, channel))
  }

  pSubscirbe = async (channel, callback) => {
    await this.subscriber.pSubscribe(channel, (message, channel) => callback(message, channel))
  }
}

module.exports = new RedisPubSubService()
