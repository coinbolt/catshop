var storage = require('@storage')

var _config = {}

//clickable URL to open client, this is only useful if opened from Coinbolt
Object.defineProperty(_config, 'protocol', {
  enumerable: true,
  get: function() {
    var config = storage.get('config') || {}
    return config.protocol ? config.protocol : 'bitcoin'
  },
  set: function(value) {
    var config = storage.get('config') || {}
    config.protocol = value
    storage.set('config', config)
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

module.exports = _config