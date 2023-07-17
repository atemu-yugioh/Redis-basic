const express = require('express')
const { connectRedis, redisClient } = require('./redisHelper')
const app = express()

app.use(express.json())

app.get('/buySameTime', async (req, res, next) => {
  try {
    const time = new Date().getTime()
    console.log(`Time Request:::  ${time}`)

    // Giả sử số lượng tồn kho là 10
    const slTonKho = 10

    // thông tin sản phẩm là iPhone14
    const keyName = 'iphone14'

    // Giả sử mỗi lần mua thì lượng tiêu thụ hàng tồn kho là 1
    const slMua = 1

    // Số lượng đã bán ra, nếu chưa bán thì set = 0, còn nếu bán thì update +1 mỗi lần user order thành công
    const getKey = await redisClient.exists(keyName)
    if (!getKey) {
      await redisClient.set(keyName, 0)
    }

    // lấy số lượng bán ra
    let slBanRa = await redisClient.get(keyName)
    console.log(`Trước khi user order thành công thì số lượng bán ra là === `, `${time}-${slBanRa}`)
    // Nếu số lượng bán ra (slBanRa) +  sô lượng mua (slMua) > slTonKho return false
    slBanRa = await redisClient.incrBy(keyName, slMua) // Atom redis

    if (slBanRa > slTonKho) {
      console.log('HẾT HÀNG')
      return res.json({
        status: 'fail',
        message: 'HẾT HÀNG',
        time
      })
    }

    // Nếu user order thành công
    console.log(`Sau khi order thành công thì số lượng bán ra là ===`, slBanRa)
    if (slBanRa > slTonKho) {
      await redisClient.set('banquaroi', slBanRa - slTonKho)
    }

    return res.json({
      status: 'success',
      message: 'OK',
      time
    })
  } catch (error) {
    console.log(error)
  }
})

app.listen(3009, async () => {
  console.log(`server is running on port::: 3009`)
  await connectRedis()
})
