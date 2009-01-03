/** @jsx React.DOM */

var App = require('./app');
var cats = require('./cat-data').getCats();
var React = require('react');

React.renderComponent(
  <App products={cats} />,
  document.querySelector('.app')
);
