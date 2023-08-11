//! 1. ZADD key score member
// thêm member và điểm số của member đó vào 1 key
//! 2. ZREVRANGE key min max (WITHSCORE)
// lấy danh sách member có điểm từ cao đến thấp trong khoảng min max WITHSCORE kèm theo số điểm của member đó
//! 3. ZRANGE key min max (WITHSCORE)
// lấy danh sách member có điểm từ thấp đến cao trong khoảng min max kèm theo điểm số của member đó
//! 4. ZREM key member
// xóa member ra khỏi key
//! 5. ZCARD key
// số lượng member trong key
//! 6. ZINCRBY key increment member
// tăng điểm số của 1 member
//! 7. ZRANGEBYSCORE key min max
// trả về danh sách member có điểm số nằm trong khoảng min max

const { redisClient } = require('../dbs/init.redis.new')

class ZSetService {
  // 1. zAdd
  static zAdd = async ({ key, members }) => {
    return await redisClient.zAdd(key, members)
  }

  // 2. zRevRange

  // 3. zRange
  static zRange = async ({ key, min, max }) => {
    return await redisClient.zRange(key, min, max)
  }

  // 4. zRem
  static zRem = async ({ key, member }) => {
    return await redisClient.zRem(key, member)
  }

  // 5. zCard
  static zCard = async (key) => {
    return await redisClient.zCard(key)
  }

  // 6. zIncrBy
  static zIncrBy = async ({ key, increment, member }) => {
    return await redisClient.zIncrBy(key, increment, member)
  }

  // 7. zRangeByScore
  static zRangeByScore = async ({ key, min, max }) => {
    return await redisClient.zRangeByScore(key, min, max)
  }
}

module.exports = ZSetService
