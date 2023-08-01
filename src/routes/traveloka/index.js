const express = require('express')
const asyncHandler = require('../../helpers/asyncHandler')
const travelokaController = require('../../controllers/traveloka.controller')
const router = express()

router.post('', asyncHandler(travelokaController.createOrder))

module.exports = router
