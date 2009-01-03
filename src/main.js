/**
 * @jsx React.DOM
 */

var React = require('react');
var App = require('./app');

var cats = require('./cat-data').getCats();

React.renderComponent(
    <App products={cats} />,
    document.querySelector('.app')
);
