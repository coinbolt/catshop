/** @jsx React.DOM */

var React = require('react')
var App = require('./components/app')
var catData = require('./cat-data')
var settings = require('@settings')

var NUM_CATS = 6
var LOW_PRICE = 0.001 //cheap cat :)
var HIGH_PRICE = 0.05

var cats = catData.getCats(NUM_CATS, LOW_PRICE, HIGH_PRICE)


//for easy experimentation from the browser console
window.React = React
window.App = App
window.cats = cats
window.settings = settings

React.renderComponent(
  <App products={cats} />,
  document.querySelector('.app')
)


