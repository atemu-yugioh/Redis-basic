const express = require('express')
const orderController = require('../../controllers/order.controller')
const asyncHandler = require('../../helpers/asyncHandler')
const router = express.Router()

router.post('/increment', asyncHandler(orderController.setQuantity))
router.get('/quantity', asyncHandler(orderController.getQuantity))
router.patch('/increment', asyncHandler(orderController.incrementQuantity))
router.post('/pre-order', asyncHandler(orderController.setUserPreOrder))

module.exports = router
