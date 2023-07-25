const express = require('express')
const pubsubDemo = require('./pubsubDemo')
const app = express()

pubsubDemo.subscribe('orderDemo', (message, channel) => {
  console.log('🚀 ~ file: email.js:6 ~ payload:', JSON.parse(message))
})

app.listen(3007, () => {
  console.log(`Payment service is running on port::: 3007`)
})
