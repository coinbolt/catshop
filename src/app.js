/**
 * @jsx React.DOM
 */

var util = require('util')
var CoinKey = require('coinkey')
var qr = require('qr-encode')
var sr = require('secure-random')
var catData = require('./cat-data')
var hb = require('./helloblock')

var NUM_CATS = 6
var LOW_PRICE = 0.0001 //cheap cat :)
var HIGH_PRICE = 0.1

var cats = catData.getCats(NUM_CATS, LOW_PRICE, HIGH_PRICE)

var ProductList = require('./productlist');

var CheckoutButton = require('./CheckoutButton');

var React = require('react');

function onload() {
  React.renderComponent(
    <ProductList data={cats} />,
    document.querySelector('.products')
  );
  React.renderComponent(
    <CheckoutButton />,
    document.querySelector('.navbar-right li')
  );

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

  //show some stupid countdown timer and then call helloblock.close() if time limit his hit?

  helloblock.connectAndListenForTx(address, function(err, data) {
    if (err) return alert(err)

    //show some success notification in the UI here, maybe through React?

    //save private key and tx for recovery of test coins for later
    localStorage.setItem('coinbolt:catshop:tx', JSON.stringify({wif: wif, tx: data}))
  })
}

function generatePurchaseQR(address, amount) {
  var url = util.format("bitcoin:%s?amount=%d", address, amount)
  var dataUri = qr(url, {type: 6, size: 6, level: 'Q'})
  return dataUri
}

module.exports = {
  onload: onload
}





