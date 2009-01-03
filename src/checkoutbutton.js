/**
 * @jsx React.DOM
 */

var React = require('react');

var productAdded = require('./productAdded');

var CheckoutButton = React.createClass({
  getInitialState: function() {
    return {
      productsCount: 0
    };
  },
  componentDidMount: function() {
    productAdded.subscribe(this.onProductAdded);
  },
  componentWillUnmount: function() {
    productAdded.unsubscribe(this.onProductAdded);
  },
  onProductAdded: function() {
    this.setState({productsCount: this.state.productsCount + 1});
  },
  render: function() {
    return (
      <a href="#cart">
        <span className="glyphicon glyphicon-shopping-cart"></span>
        <span className="badge">{this.state.productsCount}</span>
        <span>Checkout</span>
      </a>
    );
  }
});

module.exports = CheckoutButton;
