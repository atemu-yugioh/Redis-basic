const TravelokaService = require('../services/traveloka.service')

class TravelokaController {
  createOrder = async (req, res, next) => {
    return res.status(200).json({
      message: 'OK',
      data: await TravelokaService.createOrder(req.body.orderId)
    })
  }
}

module.exports = new TravelokaController()
