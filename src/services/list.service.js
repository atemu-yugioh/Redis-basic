//! 1. LPUSH key element1 element2 element3
// chèn vào bên trái stack: [element3, element2, element1]
//! 2. RPUSH key element1 element2 element3
// chèn vào bên phải stack: [element1, element2, element3]
//! 3. LPOP key count
// từ ngoài cùng bên phải xóa count phần tử
//! 4. RPOP key count
// từ bên trái xóa count phần tử
//! 5. LRANGE key bot top
// trả về list các element từ vị trí bot đến top (phân trang)
//! 6. LINDEX key index
// trả về value ở vị trí index
//! 7. LLEN key
// trả về độ dài của list
//! 8. LREM key count element
// xóa count element trong list
//! 9. LTRIM key start stop
// xóa các phần từ không có index nằm trong [start,end]
//! 10. LSET key index newElementValue
// cập nhật element ở vị trí index trong list
//! 11. LINSERT key before\after pivot element
// chèn vào trước hoặc sau element pivot 1 element mới

const { redisClient } = require('../dbs/init.redis.new')

//! *** Message Queue được cài đặt bằng cách thực hiện (LPUSH và RPOP) hoặc (RPUSH và LPOP) vào trước ra trước
//! *** Stack có thể được cài bằng cách thực hiện (LPUSH và LPOP) hoặc (RPUSH và RPOP) vào sau ra trước

class ListService {
  // 1. lPush
  static lPush = async ({ key, elements }) => {
    return await redisClient.lPush(key, elements)
  }

  // 2. rPush
  static rPush = async ({ key, elements }) => {
    return await redisClient.rPush(key, elements)
  }

  // 3. lPop
  static lPop = async (key) => {
    return await redisClient.lPop(key)
  }

  // 4. rPop
  static rPop = async (key) => {
    return await redisClient.rPop(key)
  }

  // 5. lRange
  static lRange = async ({ key, start, stop }) => {
    return await redisClient.lRange(key, start, stop)
  }

  // 6. lIndex
  static lIndex = async ({ key, index }) => {
    return await redisClient.lIndex(key, index)
  }

  // 7. lLen
  static lLen = async (key) => {
    return await redisClient.lLen(key)
  }

  // 8. lRem
  static lRem = async ({ key, count, element }) => {
    return await redisClient.lRem(key, count, element)
  }

  // 9. LTrim
  static lTrim = async ({ key, start, stop }) => {
    return await redisClient.lTrim(key, start, stop)
  }

  // 10. lSet
  static lSet = async ({ key, index, element }) => {
    return await redisClient.lSet(key, index, element)
  }

  // 11. lInsertBefore
  static lInsertBefore = async ({ key, position = 'BEFORE', pivot, element }) => {
    return await redisClient.lInsert(key, position, pivot, element)
  }

  // 12. lInsertAfter
  static lInsertAfter = async ({ key, position = 'AFTER', pivot, element }) => {
    return await redisClient.lInsert(key, position, pivot, element)
  }
}

module.exports = ListService
