const express = require('express')
const zSetController = require('../../controllers/zSet.controller')
const router = express.Router()

router.post('/add', zSetController.zAdd)
router.get('/range', zSetController.zRange)
router.delete('/rem', zSetController.zRem)
router.get('/card', zSetController.zCard)
router.patch('/incrBy', zSetController.zIncrBy)
router.get('/rangeByScore', zSetController.zRangeByScore)

module.exports = router
