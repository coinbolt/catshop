var CoinKey = require('coinkey')
var coinInfo = require('coininfo')
var HDKey = require('hdkey')
var secureRandom = require('secure-random')
var storage = require('@storage')

//localStorage key, not related to Bitcoin keys
var KEY = 'masterkey'

function getPaymentAddress() {
  var master = storage.get(KEY)
  if (!master) {
    master = {
      //128 bit seed, typically you'd generate from mnemonic, see: https://www.npmjs.org/package/bip39
      seed: secureRandom.randomBuffer(16),
      index: 0
    }
    storage.set(KEY, master)
  }

  var masterkey = HDKey.fromMasterSeed(master.seed)
  var childkey = masterkey.deriveChild(master.index) //same as => hdkey.derive('m/' + master.index)
  var ck = new CoinKey(childkey.privateKey, coinInfo('BTC-TEST').versions) //compressed by default

  //can see wif too
  console.log(ck.privateWif + ' => ' + ck.publicAddress)

  return ck.publicAddress
}

module.exports = {
  getPaymentAddress: getPaymentAddress
}
