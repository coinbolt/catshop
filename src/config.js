var storage = require('@storage')

var _config = {}

//clickable URL to open client, this is only useful if opened from Coinbolt
var _protocol
Object.defineProperty(_config, 'protocol', {
  enumerable: true,
  get: function() {
    //var config = storage.get('config') || {}
    return _protocol ? _protocol : 'bitcoin'
  },
  set: function(value) {
    //var config = storage.get('config') || {}
    //config.protocol = value
    //storage.set('config', config)
    _protocol = value
  }
})

//pricing
Object.defineProperty(_config, 'unit', {
  enumerable: true,
  get: function() {
    var config = storage.get('config') || {}
    return config.unit ? config.unit : 'BITS'
  },
  set: function(value) {
    if (['BTC', 'BITS'].indexOf(value) < 0) 
      throw new Error(value + ' is an invalid unit.')
    var config = storage.get('config') || {}
    config.unit = value
    storage.set('config', config)
  }
})

function configureFromUrl() {
  if (window.location.hash) {
    var hashData = window.location.href.split('#')[1]
    if (hashData.indexOf('config') !== 0) return //not a 'config' url
    
    hashData = hashData.replace('config', '')
    hashData = hashData.slice(1) //should have '?'
    
    var data = JSON.parse(new Buffer(hashData, 'base64').toString('utf8'))
    console.log('data from URL:')
    console.dir(data)

    //only protocol for now
    if (data.config && data.config.protocol)
      _config.protocol = data.config.protocol
  }
}

try {
  configureFromUrl()
} catch (err) {
  console.error(err)
}

module.exports = _config
