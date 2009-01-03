/**
 * @jsx React.DOM
 */

var React = require('react');

var CheckoutModal = require('./checkoutmodal');

var ModalTrigger = require('react-bootstrap').ModalTrigger;

var productAdded = require('./productAdded');

var CheckoutButton = React.createClass({
  getInitialState: function() {
    return {
      products: []
    };
  },
  componentDidMount: function() {
    productAdded.subscribe(this.onProductAdded);
  },
  componentWillUnmount: function() {
    productAdded.unsubscribe(this.onProductAdded);
  },
  onProductAdded: function(event, product) {
    this.setState({products: this.state.products.concat(product) });
  },
  render: function() {
    return (
      <ModalTrigger modal={<CheckoutModal products={this.state.products} />}>
        <a href="#cart">
          <span className="glyphicon glyphicon-shopping-cart"></span>
          <span className="badge">{this.state.products.length}</span>
          <span>Checkout</span>
        </a>
      </ModalTrigger>
    );
  }
});

module.exports = CheckoutButton;
