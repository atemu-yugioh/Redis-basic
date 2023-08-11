//! 1. SADD key member1 member2
// thêm member vào key
//! 2. SMEMBERS key
// trả về thông tin member của key
//! 3. SREM key member1 member2
// xóa member ra khỏi key
//! 4. SCARD key
// trả về số lượng member của 1 key
//! 5. SISMEMBER key member.
// kiểm tra member có tồn tại trong key không, nếu có return 1 ngược lại return 0
//! 6. SRANDMEMBER key count
// lây ngẫu nhiên count member
//! 7. SPOP key count
// xóa ngẫu nhiên count member đầu tiên
//! 8. SMOVE key1 key2 member
// chuyển member từ key1 sang key2
//! 9. SINTER key1 key2
// trả về thông tin các member giông nhau giữ key1 và key2
//! 10. SDIFF key1 key2
// trả về thông tin của các member của key1 mà không tồn tại trong key2

const { redisClient } = require('../dbs/init.redis.new')

class SetsService {
  // 1. sAdd
  static sAdd = async ({ key, members }) => {
    return await redisClient.sAdd(key, members)
  }

  // 2. sMembers
  static sMembers = async (key) => {
    return await redisClient.sMembers(key)
  }

  // 3. sRem
  static sRem = async ({ key, members }) => {
    return await redisClient.sRem(key, members)
  }

  // 4. sCard
  static sCard = async (key) => {
    return await redisClient.sCard(key)
  }

  // 5. sIsMember
  static sIsMember = async ({ key, member }) => {
    return await redisClient.sIsMember(key, member)
  }

  // 6. sRandMember
  static sRandMember = async (key) => {
    return await redisClient.sRandMember(key)
  }

  // 7. sPop
  static sPop = async ({ key, count }) => {
    return await redisClient.sPop(key, count)
  }

  // 8. sMove
  static sMove = async ({ source, destination, member }) => {
    return await redisClient.sMove(source, destination, member)
  }

  // 9. sInter
  static sInter = async (keys) => {
    // array key
    return await redisClient.sInter(keys)
  }

  // 10. sDiff
  static sDiff = async (keys) => {
    return await redisClient.sDiff(keys)
  }
}

module.exports = SetsService
