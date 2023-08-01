const TravelokaService = require('../services/traveloka.service')

class TravelokaController {
  createOrder = async (req, res, next) => {
    const { orderId, userId } = req.body
    return res.status(200).json({
      message: 'OK',
      data: await TravelokaService.createOrder({ orderId, userId })
    })
  }
}

module.exports = new TravelokaController()
