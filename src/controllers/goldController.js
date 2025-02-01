const goldService = require('../services/goldService')

const getGoldPrice = async (req, res, next) => {
  try {
    const goldPrice = await goldService.getGoldPrice()
    res.json(goldPrice)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getGoldPrice,
}
