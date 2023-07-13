const { createClient } = require('redis')

const redisClient = createClient({
  url: 'redis://localhost:6379',
  legacyMode: true
})

redisClient.connect()

redisClient.ping((err, pong) => {
  console.log(pong)
})

module.exports = redisClient
