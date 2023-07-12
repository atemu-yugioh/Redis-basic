const { createClient, RedisClientType } = require('redis')
class RedisDB {
  constructor() {
    this.redisClient = createClient({
      url: 'redis://localhost:6379'
    })
    this.connect()
    this.name = 'thieng'
  }

  connect() {
    this.redisClient.on('ready', () => {
      console.log('Ready connected')
    })

    this.redisClient
      .connect()
      .then((connection) => {
        console.log('Redis connected')
      })
      .catch((err) => {
        console.log('Error:::', err)
      })
  }

  getClient() {
    return this.redisClient
  }

  static getInstance() {
    if (!RedisDB.instance) {
      RedisDB.instance = new RedisDB()
    }
    return RedisDB.instance
  }
}

const instanceRedis = RedisDB.getInstance().getClient()

module.exports = instanceRedis
