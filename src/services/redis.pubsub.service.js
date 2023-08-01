const { redisClient } = require('../dbs/init.redis.new')

class RedisPubSubService {
  constructor() {
    this.subscriber = redisClient.duplicate()
    this.publisher = redisClient.duplicate()
    this.connect()
  }

  connect() {
    this.publisher
      .connect()
      .then(() => console.log(`Publisher connected`))
      .catch((err) => {
        console.log(`Unable connect to publisher`)
      })

    this.subscriber
      .connect()
      .then(() => {
        console.log(`subscriber connected`)
      })
      .catch((err) => {
        console.log(`Unable connect to subscriber`)
      })
  }

  publish = async (channel, message) => {
    return await this.publisher.publish(channel, message)
  }

  subscribe = async (channel, callback) => {
    return await this.subscriber.subscribe(channel, (channel, message) => callback(channel, message))
  }

  pSubscribe = async (channel, callback) => {
    return await this.subscriber.pSubscribe(channel, (channel, message) => callback(channel, message))
  }
}

module.exports = new RedisPubSubService()
