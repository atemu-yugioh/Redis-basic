const express = require('express')
const { setKeyCtr, getKeyCtr } = require('../controllers/redis.controller')
const router = express.Router()

router.post('/set-key', setKeyCtr)
router.get('/get-key', getKeyCtr)

module.exports = router
