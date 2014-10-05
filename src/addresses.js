var secureRandom = require('secure-random')
var CoinKey = require('coinkey')
var coinInfo = require('coininfo')

function getPaymentAddress() {
  var keys = sessionStorage.getItem('keys')
  if (keys) {
    return JSON.parse(keys).publicAddress
  }
  
  var privateKey = secureRandom.randomBuffer(32)

  var key = new CoinKey(privateKey, coinInfo('BTC-TEST').versions) //compressed by default
  var wif = key.privateWif
  var publicAddress = key.publicAddress

  sessionStorage.setItem('keys', JSON.stringify({
    privateKey: wif,
    publicAddress: publicAddress
  }))

  return publicAddress
}

module.exports = {
  getPaymentAddress: getPaymentAddress
}
