/** @jsx React.DOM */

//Browserify buffer toJSON is not Node compatible, we remove it so we can
//safely stringify on our own
delete Buffer.prototype.toJSON

var React = require('react')
var App = require('./components/app')
var catData = require('./cat-data')
var storage = require('@storage')
var config = require('@config')

var NUM_CATS = 6

//cheap cats :)
var LOW_PRICE = 0.00008 
var HIGH_PRICE = 0.0008

var cats = catData.getCats(NUM_CATS, LOW_PRICE, HIGH_PRICE)

console.log('If you prefer "BTC" for the unit, type: config.unit = "BTC" and refresh the page.')

//for easy experimentation from the browser console
window.React = React
window.App = App
window.Buffer = Buffer //(from Browserify)
window.cats = cats
window.catData = catData
window.config = config
window.storage = storage

React.renderComponent(
  <App products={cats} />,
  document.querySelector('.app')
)


