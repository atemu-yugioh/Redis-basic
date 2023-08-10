const express = require('express')
const listController = require('../../controllers/list.controller')
const router = express.Router()

router.post('/lPush', listController.lPush)
router.post('/rPush', listController.rPush)
router.post('/lPop', listController.lPop)
router.post('/rPop', listController.rPop)
router.get('/lRange', listController.lRange)
router.get('/lIndex', listController.lIndex)
router.get('/lLen', listController.lLen)
router.delete('/lRem', listController.lRem)
router.patch('/lTrim', listController.lTrim)
router.patch('/lSet', listController.lSet)

module.exports = router
