const express = require('express')
const rateLimiter = require('../middlewares/rateLimiter.middleware')

const router = express.Router()

router.use(rateLimiter(20, 10))

router.get('/heath-check', (req, res, next) => {
  return res.status(200).json('OK')
})

router.use('/redis', require('./redis'))
router.use('/traveloka', require('./traveloka'))

// HASH REDIS
router.use('/hash', require('./hash'))

// LIST REDIS
router.use('/list', require('./list'))

// SETS REDIS
router.use('/sets', require('./sets'))

// ZSET REDIS
router.use('/zSet', require('./zSet'))

module.exports = router
