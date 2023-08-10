const HashService = require('../services/hash.service')

class HashController {
  // 1. hSet --> gán 1 field có value vào object key
  hSet = async (req, res, next) => {
    const { userId, field, value } = req.body
    return res.status(200).json({
      message: 'OK',
      data: await HashService.hSet({
        key: userId,
        field,
        value
      })
    })
  }

  // 2. hGet --> return value của 1 field của object key
  hGet = async (req, res, next) => {
    const { userId, field, value } = req.body
    return res.status(200).json({
      message: 'OK',
      data: await HashService.hGet({
        key: userId,
        field
      })
    })
  }

  // 3. hmSet --> create 1 object
  hmSet = async (req, res, next) => {
    const { userId, object } = req.body
    return res.status(200).json({
      message: 'OK',
      data: await HashService.hmSet({
        key: userId,
        object
      })
    })
  }

  // 4. hmGet --> select and return field from object (key)
  hmGet = async (req, res, next) => {
    const { userId, fields } = req.body
    return res.status(200).json({
      message: 'OK',
      data: await HashService.hmGet({
        key: userId,
        fields
      })
    })
  }

  // 5. hDel --> delete 1 field của object (key)
  hDel = async (req, res, next) => {
    const { userId, fields } = req.body
    return res.status(200).json({
      message: 'OK',
      data: await HashService.hDel({
        key: userId,
        fields
      })
    })
  }

  // 6. hLen  --> return số lượng field của object (key)
  hLen = async (req, res, next) => {
    const { userId } = req.body
    return res.status(200).json({
      message: 'OK',
      data: await HashService.hLen(userId)
    })
  }

  // 7. hGetAll --> get detail object
  hGetAll = async (req, res, next) => {
    const { userId } = req.body
    return res.status(200).json({
      message: 'OK',
      data: await HashService.hGetAll(userId)
    })
  }

  // 8. hExists --> nếu có return true
  hExists = async (req, res, next) => {
    const { userId, field } = req.body
    return res.status(200).json({
      message: 'OK',
      data: await HashService.hExists({
        key: userId,
        field
      })
    })
  }

  // 9. hIncrBy  --> trả về value sau khi tăng
  hIncrBy = async (req, res, next) => {
    const { userId, field, increment } = req.body
    return res.status(200).json({
      message: 'OK',
      data: await HashService.hIncrBy({
        key: userId,
        field,
        increment
      })
    })
  }

  // 10. hKeys -- return về 1 mảng chứa các field của object
  hKeys = async (req, res, next) => {
    const { userId } = req.body
    return res.status(200).json({
      message: 'OK',
      data: await HashService.hKeys(userId)
    })
  }
}

module.exports = new HashController()
