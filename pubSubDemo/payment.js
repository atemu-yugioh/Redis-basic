const express = require('express')
const redisPubsub = require('./redis.pubsub')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

redisPubsub.subscribe('order', (message, channel) => {
  console.log(`PAYMENT SERVICE:::`, message)
})

app.listen(3007, () => {
  console.log(`Payment Service is running on port::: 3007`)
})
