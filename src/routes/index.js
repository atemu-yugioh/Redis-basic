const express = require('express')
const { rateLimiterV1, rateLimiterV2 } = require('../middlewares/rateLimiter.middleware')

const router = express.Router()

router.use(rateLimiterV2(60, 3))

router.get('/heath-check', (req, res, next) => {
  return res.status(200).json('OK')
})
router.use('/redis', require('./redis'))

module.exports = router
