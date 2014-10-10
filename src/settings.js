
//'window' is redundant, but it gives clarity to the global context to those who don't
//know JavaScript

var PREFIX = 'cs:'

var settings = {
  clear: function() {
    settings.keys().forEach(function(key) {
      settings.remove(key)
    })
  },

  get: function(key) {
    return JSON.parse(window.localStorage.getItem(PREFIX + key))
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
    window.localStorage.setItem(PREFIX + key, JSON.stringify(value))
  }
}

module.exports = settings
