/** @jsx React.DOM */

var React = require('react')
var Modal = require('react-bootstrap').Modal
var addresses = require('@addresses')
var CheckoutCart = require('./checkout-cart')
var CheckoutQr = require('./checkout-qr')
var CheckoutDone = require('./checkout-done')


var CheckoutModal = React.createClass({
  getInitialState: function() {
    return {
      screen: this.props.screen || 'cart',
      title: 'Cart'
    }
  },

  onCheckout: function() {
    this.setState({
      screen: 'checkout',
      title: 'Checkout'
    })
  },

  onDone: function() {
    this.setState({
      screen: 'done',
      title: 'Congratulations!'
    })
  },

  render: function() {
    var totalPrice = this.props.products.reduce(function(price, product) {
      //money and floats/doubles.... fortunately this isn't really money
      return parseFloat((price + product.price).toFixed(5))
    }, 0)

    var totalPriceBits = Math.round(totalPrice * 1e6)

    var contents
    if (this.state.screen === 'cart') {
      contents = <CheckoutCart
        products={this.props.products}
        onCheckout={this.onCheckout}
        totalPrice={ totalPrice }
        totalPriceBits={ totalPriceBits }
        onRequestHide={this.props.onRequestHide} />
    } else if (this.state.screen === 'checkout') {
      contents = <CheckoutQr
        products={ this.props.products }
        address={addresses.getPaymentAddress()}
        totalPrice={ totalPrice }
        totalPriceBits={ totalPriceBits }
        onDone={this.onDone}
        onRequestHide={this.props.onRequestHide} />
    } else {
      contents = <CheckoutDone
        products={this.props.products}
        onRequestHide={this.props.onRequestHide} />
    }

    return this.transferPropsTo(
      <Modal title={ this.state.title }>
        { contents }
      </Modal>
    )
  }
})

module.exports = CheckoutModal
