var catData = require('@cat-data')

function getCatsFromUrlConfig() {
  if (!window.location.hash) return []
  var hashData = window.location.href.split('#')[1]
  if (hashData.indexOf('bought') !== 0) return [] //not a 'bought' url

  hashData = hashData.replace('bought', '')
  hashData = hashData.slice(1) //should have '?'
  
  var data = JSON.parse(new Buffer(hashData, 'base64').toString('utf8'))
  console.log('data from bought URL:')
  console.dir(data)

 //should be cat configs
 var cats = catData.getCatsFromConfigs(data)

 return cats
}

function getBoughtUrlConfig(cats) {
  var loc = window.location
  var base =  "#bought?"
  var catConfigs = cats.map(function(cat) { return cat.config })
  var catConfigB64 = new Buffer(JSON.stringify(catConfigs)).toString('base64')
  return loc.origin + loc.pathname + base + catConfigB64
}

module.exports = {
  getBoughtUrlConfig: getBoughtUrlConfig,
  getCatsFromUrlConfig: getCatsFromUrlConfig
}