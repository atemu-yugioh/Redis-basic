const { createClient } = require('redis')

class RedisDemo {
  constructor() {
    this.publisher = createClient()
    this.subscriber = createClient()
    this.connect()
  }

  connect() {
    this.publisher
      .connect()
      .then(() => {
        console.log(`Published connected`)
      })
      .catch((err) => {
        console.log(`error:::`, err)
      })

    this.subscriber
      .connect()
      .then(() => {
        console.log(`Published connected`)
      })
      .catch((err) => {
        console.log(`error:::`, err)
      })
  }

  publish = async (channel, message) => {
    return await this.publisher.publish(channel, message)
  }

  subscribe = async (channel, callback) => {
    return await this.subscriber.subscribe(channel, (message, channel) => callback(message, channel))
  }
}

module.exports = new RedisDemo()
