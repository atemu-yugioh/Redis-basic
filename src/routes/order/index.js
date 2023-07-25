const express = require('express')
const orderController = require('../../controllers/order.controller')
const asyncHandler = require('../../helpers/asyncHandler')
const rateLimiter = require('../../middlewares/rateLimiter.middleware')
const router = express.Router()

router.use(rateLimiter(20, 15))

router.post('/increment', asyncHandler(orderController.setQuantity))
router.get('/quantity', asyncHandler(orderController.getQuantity))
router.patch('/increment', asyncHandler(orderController.incrementQuantity))
router.post('/pre-order', asyncHandler(orderController.setUserPreOrder))

module.exports = router
