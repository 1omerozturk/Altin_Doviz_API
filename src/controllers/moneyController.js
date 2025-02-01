const moneyService = require('../services/moneyService')

const getMoneyPrice = async (req, res, next) => {
  try {
    const moneyPrice = await moneyService.getMoney()
    res.json(moneyPrice)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getMoneyPrice,
}
