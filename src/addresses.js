var secureRandom = require('secure-random')
var CoinKey = require('coinkey')
var coinInfo = require('coininfo')

function getPaymentAddress() {
  var keys = localStorage.getItem('keys')
  if (keys) {
    return JSON.parse(keys).publicAddress
  }
  
  var privateKey = secureRandom.randomBuffer(32)

  var key = new CoinKey(privateKey, coinInfo('BTC-TEST')) //compressed by default
  var wif = key.privateWif
  var publicAddress = key.publicAddress

  localStorage.setItem('keys', JSON.stringify({
    privateKey: wif,
    publicAddress: publicAddres
  }))

  return publicAddress
}

module.exports = {
  getPaymentAddress: getPaymentAddress
}
