const cheerio = require('cheerio')
const { fetchData } = require('../utils/fetchData')
const { GOLD_URL } = require('../config/constants')

class GoldService {
  async getGoldPrice() {
    const html = await fetchData(`${GOLD_URL}`)
    const $ = cheerio.load(html)

    const goldPrices = []
    $('#golds tbody tr').each((index, element) => {
      const goldType = $(element)
        .find('.currency-details div')
        .eq(0)
        .text()
        .trim()
      const bid = $(element).find('td[data-socket-attr="bid"]').text().trim()
      const ask = $(element).find('td[data-socket-attr="ask"]').text().trim()
      const change = $(element).find('td[data-socket-attr="c"]').text().trim()
      const time = $(element).find('.time').text().trim()

      goldPrices.push({ goldType, bid, ask, change, time })
    })

    return goldPrices
  }
}

module.exports = new GoldService()
