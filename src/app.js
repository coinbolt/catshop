/**
 * @jsx React.DOM
 */

var catData = require('./cat-data')
var hb = require('./helloblock')

var NUM_CATS = 6
var LOW_PRICE = 0.0001 //cheap cat :)
var HIGH_PRICE = 0.1

var cats = catData.getCats(NUM_CATS, LOW_PRICE, HIGH_PRICE)

var ProductList = require('./productlist');

var CheckoutButton = require('./CheckoutButton');

var React = require('react');

function onload() {
  React.renderComponent(
    <ProductList data={cats} />,
    document.querySelector('.products')
  );
  React.renderComponent(
    <CheckoutButton />,
    document.querySelector('.navbar-right li')
  );

  console.log('hello from catshop!')
}

module.exports = {
  onload: onload
}





