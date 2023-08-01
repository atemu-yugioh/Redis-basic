const express = require('express')

const router = express.Router()

router.get('/heath-check', (req, res, next) => {
  return res.status(200).json('OK')
})

router.use('/redis', require('./redis'))
router.use('/traveloka', require('./traveloka'))

module.exports = router
