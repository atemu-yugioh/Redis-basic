// const { createClient } = require('redis')

// const redisClient = createClient({
//   url: 'redis://localhost:6379',
//   legacyMode: true
// })

// redisClient.connect()

// redisClient.ping((err, pong) => {
//   console.log(pong)
// })

// redisClient.on('ready', () => {
//   console.log('Ready connected')
// })

// redisClient.on('connect', () => {
//   console.log('Redis connected')
// })

// redisClient.on('error', (err) => {
//   console.log('Redis Error', err)
// })

// module.exports = redisClient
