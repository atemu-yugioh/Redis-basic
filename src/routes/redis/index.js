const express = require('express')
const router = express.Router()
const asyncHandler = require('../../helpers/asyncHandler')
const redisController = require('../../controllers/redis.controller')

router.post('/set-key', asyncHandler(redisController.setKeyCtr))
router.get('/get-key', asyncHandler(redisController.getKeyCtr))
// router.post('/add-order', asyncHandler(redisController.addOrderTraveloka))

module.exports = router
