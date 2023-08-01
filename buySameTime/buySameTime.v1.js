const express = require('express')
const { connectRedis, redisClient } = require('./redisHelper')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/buySameTime', async (req, res, next) => {
  try {
    const time = new Date().getTime()
    console.log(`Time request:::`, time)

    // giả sử tồn kho là 10
    const slTonKho = 10

    // thông tin sản phẩm là iphone 13
    const keyName = 'iphone13'

    // giả sử mỗi lần mua hàng thì số lượng tiêu thụ là 1
    const slMua = 1

    // số lượng bán ra, nếu chưa bán thì set = 0, còn nếu bán thì update +1 mỗi lần user order thành công
    const getKey = redisClient.exists(keyName)
    if (!getKey) {
      await redisClient.set(keyName, 0)
    }

    // Lấy số lượng bán ra
    let slBanRa = await redisClient.get(keyName)
    console.log(`Trước khi user order thành công số lượng bán ra là === `, `${time}-${slBanRa}`)
    // nếu số lượng bán ra + số lượng mua > slTonKho => return false
    if (+slBanRa + slMua > slTonKho) {
      console.log('HẾT HÀNG')
      return res.status(400).json({
        msg: 'het hang',
        status: 'fail',
        time
      })
    }

    // Nếu user order thành công
    slBanRa = await redisClient.incr(keyName, slMua)
    console.log(`Sau khi order thành công số lượng bán ra là ===`, `${time}-${slBanRa}`)
    if (slBanRa > slTonKho) {
      await redisClient.set('banquaroi', slBanRa - slTonKho)
    }

    return res.status(200).json({
      status: 'success',
      message: 'OK',
      time
    })
  } catch (error) {
    console.log(error)
  }
})

app.listen(3009, async () => {
  console.log('Server is running  on port::: 3009')
  await connectRedis()
})
