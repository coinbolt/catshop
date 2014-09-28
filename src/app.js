var util = require('util')
var CoinKey = require('coinkey')
var qr = require('qr-encode')
var sr = require('secure-random')
var catData = require('./cat-data')

var NUM_CATS = 6
var LOW_PRICE = 0.0001 //cheap cat :)
var HIGH_PRICE = 0.1 

var cats = catData.getCats(NUM_CATS, LOW_PRICE, HIGH_PRICE)


function onload() {
  console.log('hello from catshop!')
}

function checkout(catsToPurchase) {
  var totalPrice = catsToPurchase.reduce(function(sum, cat) {
    return sum + cat.price
  },0)

  var privateKey = sr.randomBuffer(32)
  var key = new CoinKey(privateKey) //compressed by default
  var wif = key.privateWif
  var address = key.publicAddress

  var qrDataUri = generatePurchaseQR(address, totalPrice)

  //somewhere else, maybe a React component?
  //var img = new Image()
  //img.src = qrDataUri
  //document.querySelector('SELECTOR HERE').appendChild(img)
}

function generatePurchaseQR(address, amount) {
  var url = util.format("bitcoin:%s?amount=%d", address, amount)
  var dataUri = qr(url, {type: 6, size: 6, level: 'Q'})
  return dataUri
}

module.exports = {
  onload: onload
}





