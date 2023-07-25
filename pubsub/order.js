const express = require('express')
const pubsubDemo = require('./pubsubDemo')
const app = express()

app.get('/pubsub/order', (req, res, next) => {
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

  pubsubDemo.publish('orderDemo', JSON.stringify(orders))

  return res.status(200).json({
    message: 'ok',
    data: orders
  })
})

app.listen(3005, () => {
  console.log(`Order service is running on port::: 3005`)
})
