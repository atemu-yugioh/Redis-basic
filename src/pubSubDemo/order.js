const express = require('express')
const app = express()
const pubSubDemo = require('./pubSub')

app.get('/pubsub/order', (req, res, next) => {
  const order = [
    {
      productId: 1,
      quantity: 2
    },
    {
      productId: 2,
      quantity: 2
    }
  ]
  // publish event order to subscribe channel 'order'
  pubSubDemo.publish('orderDemo', JSON.stringify(order))
  return res.status(200).json(order)
})

app.listen(3005, () => {
  console.log('Order service is running on port:::', 3005)
})
