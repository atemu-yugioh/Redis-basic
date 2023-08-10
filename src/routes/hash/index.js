const express = require('express')
const hashController = require('../../controllers/hash.controller')
const router = express.Router()

router.post('/set', hashController.hSet)
router.get('/get', hashController.hGet)
router.post('/mset', hashController.hmSet)
router.get('/mget', hashController.hmGet)
router.get('/getAll', hashController.hGetAll)
router.delete('/del', hashController.hDel)
router.get('/len', hashController.hLen)
router.get('/exist', hashController.hExists)
router.patch('/incrBy', hashController.hIncrBy)
router.get('/keys', hashController.hKeys)

module.exports = router
