var qr = require('qr-encode');
var secureRandom = require('secure-random');
var CoinKey = require('coinkey');
var util = require('util');

function generatePurchaseQR(totalPrice) {

  return generateQR(address, totalPrice);

  //somewhere else, maybe a React component?
  //var img = new Image()
  //img.src = qrDataUri
  //document.querySelector('SELECTOR HERE').appendChild(img)

  //show some stupid countdown timer and then call helloblock.close() if time limit his hit?
/*
  helloblock.connectAndListenForTx(address, function(err, data) {
    if (err) return alert(err)

    //show some success notification in the UI here, maybe through React?

    //save private key and tx for recovery of test coins for later
    localStorage.setItem('coinbolt:catshop:tx', JSON.stringify({wif: wif, tx: data}))
  })
*/
}

function generateQR(address, amount) {
  var url = util.format("bitcoin:%s?amount=%d", address, amount);
  var dataUri = qr(url, {type: 6, size: 6, level: 'Q'});
  return dataUri;
}

function getPaymentAddress() {
  var keys = localStorage.getItem('keys');
  if (keys) {
    return JSON.parse(keys).publicAddress;
  }
  var privateKey = secureRandom.randomBuffer(32);
  // see https://en.bitcoin.it/wiki/List_of_address_prefixes
  var testNet = {
    public: 111,
    private: 239
  };
  var key = new CoinKey(privateKey, testNet); //compressed by default
  var wif = key.privateWif;
  var publicAddress = key.publicAddress;
  localStorage.setItem('keys', JSON.stringify({
    privateKey: wif,
    publicAddress: publicAddress
  }));
  return publicAddress;
}

module.exports.generateQR = generateQR;
module.exports.getPaymentAddress = getPaymentAddress;
