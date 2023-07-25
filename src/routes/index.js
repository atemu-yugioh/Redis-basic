const express = require('express')
const router = express.Router()

// order route
router.use('/order', require('./order'))

// traveloka service
router.use('/traveloka', require('./traveloka'))

module.exports = router
