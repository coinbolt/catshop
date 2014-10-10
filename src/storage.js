
var PREFIX = 'cs:'

//this won't work if Buffer.prototype.toJSON is NOT deleted
function replacer(key, value) {
  if (Buffer.isBuffer(value))
    return "buffer/" + value.toString('hex')
  else
    return value
}

function reviver(key, value) {
  if (typeof value == 'string' && value.indexOf('buffer/') === 0) 
    return new Buffer(value.replace('buffer/', ''), 'hex')
  else
    return value
}

var storage = {
  clear: function() {
    storage.keys().forEach(function(key) {
      storage.remove(key)
    })
  },

  get: function(key) {
    //'window' is redundant, but it gives clarity to the global context to those who don't
    //know JavaScript
    return JSON.parse(window.localStorage.getItem(PREFIX + key), reviver)
  },

  keys: function() {
    return Object.keys(window.localStorage)
                 .filter(function(key) { return key.indexOf(PREFIX) === 0 })
                 .map(function(key) { return key.replace(PREFIX, '') })
  },

  remove: function(key) {
    window.localStorage.removeItem(PREFIX + key)
  },

  set: function(key, value) {
    window.localStorage.setItem(PREFIX + key, JSON.stringify(value, replacer))
  }
}

module.exports = storage
