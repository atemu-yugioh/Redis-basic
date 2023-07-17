const express = require('express')
const { connectRedis, redisClient } = require('./redisHelper')

const app = express()

app.use(express.json())

app.post('/calculatorView', async (req, res, next) => {
  const { videoId, userId } = req.body
  const keyCalCulator = `${videoId}-${userId}`

  // *** Quy định phải xem video 1 phút thì mới tính là 1 lượt xem
  // SET key: video-user 60s lần đầu tiên khi người dùng nhấn vào xem video (dùng setNX để các lần sau sẽ không làm mới lại key này nếu nó đang tồn tại)
  const isOk = await redisClient.set(keyCalCulator, 'hits', {
    EX: 60,
    NX: true
  })

  // nếu key không tồn tại thì có nghĩa là (hoặc là lần xem đầu tiên hoặc là đã hết 60s như quy định)
  // thì sẽ tăng view của video lên +1
  if (isOk) {
    await redisClient.incr(videoId)
  }

  // ?? Tạo nhiều tài khoản khác nhau login trên cùng 1 máy để cày view thì sao
  // => thì lúc này không set key bằng video-user nữa mà sẽ là video-ipUser
  // ?? Nếu dùng face Ip thì sao check
  // => thì backend sẽ dựa vào location để phát hiện bất thường (cùng 1 tài khoản mà 5 phút trước ở việt nam, 5 phút sau lại ở Mỹ => bất thường)

  return res.status(200).json({
    message: 'Success',
    data: await redisClient.get(keyCalCulator)
  })
})

app.listen(3008, async () => {
  console.log('Server is running on port:::', 3008)
  await connectRedis()
})
