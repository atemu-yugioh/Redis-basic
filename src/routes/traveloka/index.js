const express = require('express')
const travelokaController = require('../../controllers/traveloka.controller')
const asyncHandler = require('../../helpers/asyncHandler')
const router = express()

router.post('', asyncHandler(travelokaController.createOrder))

module.exports = router
