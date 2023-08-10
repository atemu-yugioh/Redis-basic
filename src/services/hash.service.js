// HASH: tồn tại giống như 1 bảng gồm 2 cột (field-value) của 1 object
// ví dụ:
/*
    const user = {
        name: 'nguyen van a',
        age: 30,
        gender: 'male'
    }

    ==> HASH MAP <==
        field           value
        name            'nguyen van a'
        age             30
        gender          'male'
*/
//! 1. HSET key field value
// tạo 1 cặp field-value của 1 key (object)
//! 2. HGET key field
// lấy value của 1 field được chỉ định
//! 3. HMSET key field1 value1 field2 value2
// tạo nhiều cặp field-vallue cùng lúc với thứ tự field1-value1 field2-value2
//! 4. HMGET key field1 field2
// lấy value của các field được chỉ định
//! 5. HDEL key field
// xóa field được chỉ định của 1 key (object)
//! 6. HLEN key
// trả về số lượng field-value của 1 key (object)
//! 7. HGETALL key
// trả về tất cả thông tin của 1 key (object) bao gồm field-value
//! 8. HEXISTS key field
// kiểm tra xem 1 field có tồn tại trong key (object) không. nếu có return 1
//! 9. HINCRBY key field incrementValue
// tăng giá trị của 1 field chỉ định với 1 value cụ thể
//! 10. HKEYS key
// trả về tất cả các field của key (object)

const { redisClient } = require('../dbs/init.redis.new')

class HashService {
  // 1. hSet
  static hSet = async ({ key, field, value }) => {
    return await redisClient.hSet(key, field, value)
  }

  // 2. hGet
  static hGet = async ({ key, field }) => {
    return await redisClient.hGet(key, field)
  }

  // 3. hmSet
  static hmSet = async ({ key, object }) => {
    return await redisClient.hSet(key, object)
  }

  // 4. hmGet
  static hmGet = async ({ key, fields }) => {
    return await redisClient.hmGet(key, fields)
  }

  // 5. hDel
  static hDel = async ({ key, fields }) => {
    return await redisClient.hDel(key, fields)
  }

  // 6. hLen
  static hLen = async (key) => {
    return await redisClient.hLen(key)
  }

  // 7. hGetAll
  static hGetAll = async (key) => {
    return await redisClient.hGetAll(key)
  }

  // 8. hExist
  static hExists = async ({ key, field }) => {
    return await redisClient.hExists(key, field)
  }

  // 9. hIncrBy
  static hIncrBy = async ({ key, field, increment }) => {
    return await redisClient.hIncrBy(key, field, increment)
  }

  // 10. hKeys
  static hKeys = async (key) => {
    return await redisClient.hKeys(key)
  }
}

module.exports = HashService
