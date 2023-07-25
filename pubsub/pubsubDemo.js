const { createClient } = require('redis')

class PubSubDemo {
  constructor() {
    this.subscriber = createClient({ url: 'redis://localhost:6379' })
    this.publisher = createClient({ url: 'redis://localhost:6379' })
    this.connect()
  }

  connect() {
    this.subscriber
      .connect()
      .then(() => {
        console.log(`subscriber demo connected`)
      })
      .catch((err) => {
        console.log(`Error:::`, err)
      })

    this.publisher
      .connect()
      .then(() => {
        console.log(`Publisher demo connected`)
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

module.exports = new PubSubDemo()
