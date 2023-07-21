const asyncHandler = (fn) => async (req, res, next) => fn(req, res, next).catch(next)

module.exports = asyncHandler
