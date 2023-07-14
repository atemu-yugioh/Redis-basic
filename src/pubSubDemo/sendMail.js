const express = require('express')
const app = express()
const pubSubDemo = require('./pubSub')

pubSubDemo.subscribe('orderDemo', (message, channel) => {
  message = JSON.parse(message)

  console.log(`SEND MAIL SERVICE:::`, message)
})

app.listen(3007, () => {
  console.log('Order service is running on port:::', 3007)
})
