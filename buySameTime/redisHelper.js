const redis = require('redis')
const redisClient = redis.createClient()

const connectRedis = async () => {
  await redisClient.connect()
}

redisClient.on('ready', () => {
  console.log('Connected!')
})

module.exports = {
  connectRedis,
  redisClient
}
