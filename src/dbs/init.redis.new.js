const { createClient } = require('redis')
const {
  dbRedis: { url }
} = require('../configs/config.app')

const redisClient = createClient({ url })

class RedisDB {
  constructor() {
    this.connect()
  }

  connect() {
    redisClient.on('ready', () => {
      console.log('Ready for connect to redis')
    })

    redisClient
      .connect()
      .then(() => {
        console.log(`Redis connected`)
      })
      .catch((err) => {
        console.log(`Unable connect to redis`)
      })
  }

  static getInstance() {
    if (!RedisDB.instance) {
      RedisDB.instance = new RedisDB()
    }

    return RedisDB.instance
  }
}

const redisInstance = RedisDB.getInstance()

module.exports = {
  redisClient,
  redisInstance
}
