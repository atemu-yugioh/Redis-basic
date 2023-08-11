const ZSetService = require('../services/zSet.service')

class ZSetController {
  // 1. zAdd
  zAdd = async (req, res, next) => {
    const { key, members } = req.body
    return res.status(200).json({
      message: 'zAdd',
      data: await ZSetService.zAdd({ key, members })
    })
  }

  // 2. zRangeWithScores
  zRangeWithScores = async (req, res, next) => {
    const { key, min, max } = req.body
    return res.status(200).json({
      message: 'zRangeWithScores',
      data: await ZSetService.zRangeWithScores({ key, min, max })
    })
  }

  // 3. zRange
  zRange = async (req, res, next) => {
    const { key, min, max } = req.body
    return res.status(200).json({
      message: 'zRange',
      data: await ZSetService.zRange({ key, min, max })
    })
  }

  // 4. zRem
  zRem = async (req, res, next) => {
    const { key, member } = req.body
    return res.status(200).json({
      message: 'zRem',
      data: await ZSetService.zRem({ key, member })
    })
  }

  // 5. zCard
  zCard = async (req, res, next) => {
    const { key } = req.body
    return res.status(200).json({
      message: 'zCard',
      data: await ZSetService.zCard(key)
    })
  }

  // 6. zIncrBy
  zIncrBy = async (req, res, next) => {
    const { key, increment, member } = req.body
    return res.status(200).json({
      message: 'zIncrBy',
      data: await ZSetService.zIncrBy({ key, increment, member })
    })
  }

  // 7. zRangeByScore
  zRangeByScore = async (req, res, next) => {
    const { key, min, max } = req.body
    return res.status(200).json({
      message: 'zRangeByScore',
      data: await ZSetService.zRangeByScore({ key, min, max })
    })
  }
}

module.exports = new ZSetController()
