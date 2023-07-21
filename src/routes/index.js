const express = require('express')
const router = express.Router()

// order route
router.use('/order', require('./order'))

module.exports = router
