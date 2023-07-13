const express = require('express')
const router = express.Router()
const redisController = require('../../controllers/redis.controller')

router.post('/set-key', redisController.setKeyCtr)
router.get('/get-key', redisController.getKeyCtr)

module.exports = router
