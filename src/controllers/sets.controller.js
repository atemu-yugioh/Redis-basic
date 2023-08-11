const SetsService = require('../services/sets.service')

class SetsController {
  // 1. sAdd
  sAdd = async (req, res, next) => {
    const { key, members } = req.body
    return res.status(200).json({
      message: 'sAdd',
      data: await SetsService.sAdd({ key, members })
    })
  }

  // 2. sMembers
  sMembers = async (req, res, next) => {
    const { key } = req.body
    return res.status(200).json({
      message: 'sMembers',
      data: await SetsService.sMembers(key)
    })
  }

  // 3. sRem --> remove
  sRem = async (req, res, next) => {
    const { key, members } = req.body
    return res.status(200).json({
      message: 'sRem',
      data: await SetsService.sRem({ key, members })
    })
  }

  // 4. sCard --> length
  sCard = async (req, res, next) => {
    const { key, members } = req.body
    return res.status(200).json({
      message: 'sCard',
      data: await SetsService.sCard(key)
    })
  }

  // 5. sIsMember --> true or false
  sIsMember = async (req, res, next) => {
    const { key, member } = req.body
    return res.status(200).json({
      message: 'sIsMember',
      data: await SetsService.sIsMember({ key, member })
    })
  }

  // 6. sPop -- return member deleted
  sPop = async (req, res, next) => {
    const { key, count } = req.body
    return res.status(200).json({
      message: 'sPop',
      data: await SetsService.sPop({ key, count })
    })
  }

  // 7. sRandMember
  sRandMember = async (req, res, next) => {
    const { key, count } = req.body
    return res.status(200).json({
      message: 'sRandMember',
      data: await SetsService.sRandMember(key)
    })
  }

  // 8. sMove
  sMove = async (req, res, next) => {
    const { source, destination, member } = req.body
    return res.status(200).json({
      message: 'sMove',
      data: await SetsService.sMove({ source, destination, member })
    })
  }

  // 9. sInter
  sInter = async (req, res, next) => {
    const { keys } = req.body
    return res.status(200).json({
      message: 'sInter',
      data: await SetsService.sInter(keys)
    })
  }

  // 10. sDiff
  sDiff = async (req, res, next) => {
    const { keys } = req.body
    return res.status(200).json({
      message: 'sDiff',
      data: await SetsService.sDiff(keys)
    })
  }
}

module.exports = new SetsController()
