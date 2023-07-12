const { setKey, getKey } = require('../services/redis.service')

const setKeyCtr = async (req, res, next) => {
  const { key, value } = req.body
  return res.status(200).json({
    data: await setKey({ key, value })
  })
}

const getKeyCtr = async (req, res, next) => {
  return res.status(200).json({
    data: await getKey('newKey')
  })
}

module.exports = {
  setKeyCtr,
  getKeyCtr
}
