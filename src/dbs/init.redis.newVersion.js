const { createClient } = require('redis')
const {
  dbRedis: { url }
} = require('../configs/config.app')
const redisClient = createClient({
  url
})
class RedisDB {
  constructor() {
    this.connect()
  }

  connect() {
    redisClient.on('ready', () => {
      console.log('Ready connected')
    })

    redisClient
      .connect()
      .then(() => {
        console.log('Redis connected')
      })
      .catch((err) => {
        console.log('Error:::', err)
      })
  }

  static getInstance() {
    if (!RedisDB.instance) {
      RedisDB.instance = new RedisDB()
    }
    return RedisDB.instance
  }
}

const instanceRedis = RedisDB.getInstance()

module.exports = {
  instanceRedis,
  redisClient
}
