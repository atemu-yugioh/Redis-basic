const { createClient } = require('redis')

class RedisDB {
  constructor() {
    this.connect()
  }

  connect() {
    this.redisClient = createClient({
      url: 'redis://localhost:6379'
    })
    this.redisClient
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

module.exports = instanceRedis
