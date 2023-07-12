const instanceRedis = require('../dbs/init.redis.level.xxx')

const setKey = async ({ key, value }) => {
  return await instanceRedis.set(key, value)
}

const getKey = async (key) => {
  return await instanceRedis.get(key)
}

module.exports = {
  setKey,
  getKey
}
