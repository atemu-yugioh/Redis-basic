// const { createClient } = require('redis')

// const connectRedis = async () => {
//   try {
//     const redisClient = createClient({
//       url: 'redis://:apa7Nx6wBkizlS3uRgfeeN91goWyPYGp@redis-11713.c252.ap-southeast-1-1.ec2.cloud.redislabs.com:11713'
//     })

//     return await redisClient.connect()

//     // redisClient.ping((err, pong) => {
//     //   console.log(pong)
//     // })

//     // redisClient.on('ready', () => {
//     //   console.log('Redis connected')
//     // })

//     // redisClient.on('error', (err) => {
//     //   console.log('Redis Error', err)
//     // })
//   } catch (error) {
//     await redisClient.disconnect()
//     console.log('error:::', error)
//   }
// }

// const instanceRedis = await connectRedis()

// module.exports = connectRedis
