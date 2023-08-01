const redis = require('redis')
const redisClient = redis.createClient()

const connectRedis = async () => {
  await redisClient
    .connect()
    .then(() => {
      console.log('Redis connected')
    })
    .catch(() => {
      console.log('Unable connect to redis')
    })
}

redisClient.on('ready', () => {
  console.log('Ready for connection')
})

module.exports = {
  connectRedis,
  redisClient
}
