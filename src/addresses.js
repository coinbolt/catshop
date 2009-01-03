var secureRandom = require('secure-random');
var CoinKey = require('coinkey');

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

module.exports.getPaymentAddress = getPaymentAddress;
