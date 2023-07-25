const express = require('express')
const { redisClient, connectRedis } = require('./redisHelper')

const app = express()

app.use(express.json())

app.post('/calculatorView', async (req, res, next) => {
  try {
    const { videoId, userId } = req.body

    const keyRedis = `${videoId}-${userId}`
    const timeView = 30
    const isOk = await redisClient.set(keyRedis, 'hits', {
      EX: timeView,
      NX: true
    })

    if (isOk) {
      await redisClient.incr(videoId)
    }

    return res.status(200).json({
      message: 'Ok'
    })
  } catch (error) {
    console.log('🚀 ~ file: calculatorView.js:27 ~ app.post ~ error:', error)
  }
})

app.listen(3008, async () => {
  console.log(`Server is running on port::: 3008`)
  await connectRedis()
})
