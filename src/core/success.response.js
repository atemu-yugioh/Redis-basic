class SuccessResponse {
  constructor({ message, reasonPhrases = 'SUCCESS', status = 200, data = {} }) {
    this.message = message ? message : reasonPhrases
    this.status = status
    this.data = data
  }

  send(res, header = {}) {
    return res.status(this.status).json(this)
  }
}

class OK extends SuccessResponse {
  constructor({ message, data }) {
    super({ message, data })
  }
}

class CREATED extends SuccessResponse {
  constructor({ status = StatusCodes.CREATED, message, reasonPhrases = 'CREATED', data, option = {} }) {
    super({ status, message, reasonPhrases, data })
    this.option = option
  }
}

module.exports = {
  SuccessResponse,
  OK,
  CREATED
}
