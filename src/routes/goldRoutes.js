const express = require('express')
const router = express.Router()
const { getGoldPrice } = require('../controllers/goldController')

router.get('/', getGoldPrice)

module.exports = router
