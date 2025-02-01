const cheerio = require('cheerio')
const { fetchData } = require('../utils/fetchData')
const { MONEY_URL } = require('../config/constants')

class MoneyService {
  async getMoney() {
    const html = await fetchData(`${MONEY_URL}`)
    const $ = cheerio.load(html)

    const exchangeRates = []
    $('#currencies tbody tr').each((index, element) => {
      const currency = $(element)
        .find('.currency-details div')
        .eq(0)
        .text()
        .trim()
      const cname = $(element).find('.currency-details .cname').text().trim()
      const bid = $(element).find('td[data-socket-attr="bid"]').text().trim()
      const ask = $(element).find('td[data-socket-attr="ask"]').text().trim()
      const high = $(element).find('td').eq(3).text().trim()
      const low = $(element).find('td').eq(4).text().trim()
      const change = $(element).find('td[data-socket-attr="c"]').text().trim()
      const time = $(element).find('.time').text().trim()

      exchangeRates.push({ currency, cname, bid, ask, high, low, change, time })
    })

    return exchangeRates
  }
}

module.exports = new MoneyService()
