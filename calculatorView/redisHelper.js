const { createClient } = require('redis')

const redisClient = createClient({ url: 'redis://localhost:6379' })

const connectRedis = async () => {
  await redisClient
    .connect()
    .then(() => {
      console.log('Redis connected')
    })
    .catch((err) => {
      console.log(`Error:::`, err)
    })
}

redisClient.on('ready', () => {
  console.log('ready for connect')
})

module.exports = {
  redisClient,
  connectRedis
}
