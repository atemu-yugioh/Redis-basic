const { redisClient } = require('../dbs/init.redis.new')

class RedisPubSubService {
  constructor() {
    this.publisher = redisClient.duplicate()
    this.subscriber = redisClient.duplicate()
    this.connect()
  }

  connect() {
    this.publisher
      .connect()
      .then(() => {
        console.log(`Publisher connected`)
      })
      .catch((err) => {
        console.log(`Unable connect to publisher`)
      })

    this.subscriber
      .connect()
      .then(() => {
        console.log(`Subscriber connected`)
      })
      .catch((err) => {
        console.log(`Unable connect to subscriber`)
      })
  }

  publish = async (channel, message) => {
    return await this.publisher.publish(channel, message)
  }

  subscribe = async (channel, callback) => {
    return await this.subscriber.subscribe(channel, (message, channel) => callback(message, channel))
  }

  pSubscribe = async (channel, callback) => {
    return await this.subscriber.pSubscribe(channel, (message, channel) => callback(message, channel))
  }
}

module.exports = new RedisPubSubService()
