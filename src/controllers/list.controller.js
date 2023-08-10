const ListService = require('../services/list.service')

class ListController {
  // 1. lPush
  lPush = async (req, res, next) => {
    try {
      const { key, elements } = req.body
      return res.status(200).json({
        message: 'lPush',
        data: await ListService.lPush({
          key,
          elements: elements.map((element) => JSON.stringify(element))
        })
      })
    } catch (error) {
      return res.status(500).json({
        error
      })
    }
  }

  // 2. rPush
  rPush = async (req, res, next) => {
    try {
      const { key, elements } = req.body
      return res.status(200).json({
        message: 'rPush',
        data: await ListService.rPush({
          key,
          elements: elements.map((element) => JSON.stringify(element))
        })
      })
    } catch (error) {
      return res.status(500).json({
        error
      })
    }
  }

  // 3. lPop
  lPop = async (req, res, next) => {
    try {
      const { key } = req.body
      return res.status(200).json({
        message: 'lPop',
        data: JSON.parse(await ListService.lPop(key))
      })
    } catch (error) {
      return res.status(500).json({
        error
      })
    }
  }

  // 4. rPop
  rPop = async (req, res, next) => {
    try {
      const { key } = req.body
      return res.status(200).json({
        message: 'rPop',
        data: JSON.parse(await ListService.rPop(key))
      })
    } catch (error) {
      return res.status(500).json({
        error
      })
    }
  }

  // 5. lRange --> get list item
  lRange = async (req, res, next) => {
    try {
      const { key } = req.body
      const listCategory = await ListService.lRange({ key, start: 0, stop: -1 }) // get all
      return res.status(200).json({
        message: 'lRange',
        data: listCategory.map((category) => JSON.parse(category))
      })
    } catch (error) {
      return res.status(500).json({
        error
      })
    }
  }

  // 6. lIndex
  lIndex = async (req, res, next) => {
    try {
      const { key, index } = req.body
      return res.status(200).json({
        message: 'lIndex',
        data: JSON.parse(await ListService.lIndex({ key, index }))
      })
    } catch (error) {
      return res.status(500).json({
        error
      })
    }
  }

  // 7. lLen
  lLen = async (req, res, next) => {
    try {
      const { key } = req.body
      return res.status(200).json({
        message: 'lLen',
        data: await ListService.lLen(key)
      })
    } catch (error) {
      return res.status(500).json({
        error
      })
    }
  }

  // 8. lRem
  lRem = async (req, res, next) => {
    try {
      const { key, count = 0, element } = req.body
      // count > 0 ==> remove count element from head to tail
      // count < 0 ==> remove count element from tail to head
      //   count = 0 ==> remove all
      return res.status(200).json({
        message: 'lRem',
        data: await ListService.lRem({
          key,
          count,
          element: JSON.stringify(element)
        })
      })
    } catch (error) {
      return res.status(500).json({
        error
      })
    }
  }

  // 9. lTrim
  lTrim = async (req, res, next) => {
    try {
      const { key, start, stop } = req.body
      return res.status(200).json({
        message: 'lTrim',
        data: await ListService.lTrim({ key, start, stop })
      })
    } catch (error) {
      return res.status(500).json({
        error
      })
    }
  }

  // 10. lSet
  lSet = async (req, res, next) => {
    try {
      const { key, index, element } = req.body
      return res.status(200).json({
        message: 'lSet',
        data: await ListService.lSet({
          key,
          index,
          element: JSON.stringify(element)
        })
      })
    } catch (error) {
      return res.status(500).json({
        error
      })
    }
  }

  // 11. lInsertBefore
  // 12. lInsertAfter
}

module.exports = new ListController()
