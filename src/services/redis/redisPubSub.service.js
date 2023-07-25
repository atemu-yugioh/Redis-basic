const { redisClient } = require('../../dbs/init.redis')

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
        console.log(`Subscriber connected`)
      })
      .catch((err) => {
        console.log(`Error:::`, err)
      })

    this.publisher
      .connect()
      .then(() => {
        console.log(`Publisher connected`)
      })
      .catch((err) => {
        console.log(`Error:::`, err)
      })
  }

  publish = async (channel, message) => {
    await this.publisher.publish(channel, message)
  }

  subscribe = async (channel, callback) => {
    await this.subscriber.subscribe(channel, (message, channel) => callback(message, channel))
  }

  pSubscribe = async (channel, callback) => {
    await this.subscriber.pSubscribe(channel, (message, channel) => callback(message, channel))
  }
}

module.exports = new RedisPubSubService()
