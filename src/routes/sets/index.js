const express = require('express')
const setsController = require('../../controllers/sets.controller')
const router = express.Router()

router.post('/add', setsController.sAdd)
router.get('/members', setsController.sMembers)
router.delete('/rem', setsController.sRem)
router.get('/card', setsController.sCard)
router.get('/isMember', setsController.sIsMember)
router.delete('/pop', setsController.sPop)
router.get('/randMember', setsController.sRandMember)
router.patch('/move', setsController.sMove)
router.get('/inter', setsController.sInter)
router.get('/diff', setsController.sDiff)

module.exports = router
