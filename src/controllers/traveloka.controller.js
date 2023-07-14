const { OK } = require('../core/success.response')
const TravelokaService = require('../services/Traveloka.service')

class TravelokaController {
  createOrder = async (req, res, next) => {
    new OK({
      message: `Tạo đơn hàng thành công! Mã đơn hàng ${req.body.orderId}, vui lòng thanh toán trong vòng 30p !`,
      data: await TravelokaService.createOrder(req.body.orderId)
    }).send(res)
  }
}

module.exports = new TravelokaController()
