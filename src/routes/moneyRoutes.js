const express = require('express')
const router = express.Router()

const { getMoneyPrice } = require('../controllers/moneyController')

router.get('/', getMoneyPrice)

module.exports = router;
