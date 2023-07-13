const { ReasonPhrases, StatusCodes } = require('../utils/httpStatusCode')

class ErrorResponse extends Error {
  constructor(message, status) {
    super(message)
    this.status = status
  }
}

class NotFoundError extends ErrorResponse {
  constructor(message = ReasonPhrases.NOT_FOUND, status = StatusCodes.NOT_FOUND) {
    super(message, status)
  }
}

class TooManyRequestError extends ErrorResponse {
  constructor(message = ReasonPhrases.TOO_MANY_REQUESTS, status = StatusCodes.TOO_MANY_REQUESTS) {
    super(message, status)
  }
}

module.exports = {
  NotFoundError,
  TooManyRequestError
}
