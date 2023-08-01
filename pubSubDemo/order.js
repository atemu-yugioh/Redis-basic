const express = require('express')
const redisPubsub = require('./redis.pubsub')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/pubsub/order', async (req, res, next) => {
  const orders = [
    {
      id: 1,
      name: 'iphone12'
    },
    {
      id: 2,
      name: 'galaxy S23'
    }
  ]

  await redisPubsub.publish('order', JSON.stringify(orders))

  return res.status(200).json({
    data: orders
  })
})

app.listen(3005, () => {
  console.log(`Order Service is running on port::: 3005`)
})
