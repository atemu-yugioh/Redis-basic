const express = require('express')
const redisPubsub = require('./redis.pubsub')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

redisPubsub.subscribe('order', (message, channel) => {
  message = JSON.parse(message)

  console.log(`PRODUCT SERVICE:::`, message)
})

app.listen(3006, () => {
  console.log(`Product Service is running on port::: 3006`)
})
