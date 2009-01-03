/** @jsx React.DOM */

var NUM_CATS = 6
var LOW_PRICE = 0.0001 //cheap cat :)
var HIGH_PRICE = 0.1

var App = require('./app');
var cats = require('./cat-data').getCats(NUM_CATS, LOW_PRICE, HIGH_PRICE);
var React = require('react');

React.renderComponent(
  <App products={cats} />,
  document.querySelector('.app')
);
