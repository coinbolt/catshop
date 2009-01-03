/** @jsx React.DOM */

var addresses = require('./addresses');
var CheckoutCart = require('./checkoutcart');
var CheckoutQr = require('./checkoutqr');
var Modal = require('react-bootstrap').Modal;
var React = require('react');

var CheckoutModal = React.createClass({
  getInitialState: function() {
    return {
      screen: 'cart'
    };
  },
  onCheckout: function() {
    this.setState({
      screen: 'checkout'
    });
  },
  render: function() {
    var totalPrice = this.props.products.reduce(function(price, product) {
      return price + product.price;
    }, 0);
    var contents;
    if (this.state.screen === 'cart') {
      contents = <CheckoutCart
        products={this.props.products}
        onCheckout={this.onCheckout}
        totalPrice={totalPrice}
        onRequestHide={this.props.onRequestHide} />;
    } else {
      contents = <CheckoutQr
        address={addresses.getPaymentAddress()}
        totalPrice={totalPrice}
        onRequestHide={this.props.onRequestHide} />;
    }
    return this.transferPropsTo(
      <Modal title="Cart">
        {contents}
      </Modal>
    );
  }
});

module.exports = CheckoutModal;
