const compression = require('compression')
const morgan = require('morgan')
const { default: helmet } = require('helmet')
const express = require('express')
const connectRedis = require('./dbs/init.redis')
const app = express()

// init middleware
app.use(compression())
app.use(morgan('dev'))
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// init db
require('./dbs')

// init routes
app.use('/api/v1', require('./routes'))

// handling error 404
app.use((req, res, next) => {
  const error = new Error('Not found!')
  error.status = 404
  next(error)
})

// handle error throw
app.use((error, req, res, next) => {
  const statusCode = error.status || 500
  return res.status(statusCode).json({
    status: statusCode,
    message: error.message || 'Internal server error!',
    data: null
  })
})

module.exports = app
