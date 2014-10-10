/** @jsx React.DOM */

var addresses = require('@addresses')
var Cart = require('./cart')
var Modal = require('react-bootstrap').Modal
var React = require('react')

var CheckoutCart = React.createClass({
  render: function() {
    var buyButton
    if (this.props.products.length > 0) {
      buyButton = (
        <button type="button" className="btn btn-success" onClick={this.props.onCheckout}>
          Buy now <span className="glyphicon glyphicon-play"></span>
        </button>
      )
    }
    
    return (
      <div>
        <div className="modal-body">
          <Cart products={ this.props.products } totalPrice={ this.props.totalPrice } totalPriceBits={ this.props.totalPriceBits } />
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" onClick={this.props.onRequestHide}>
            <span className="glyphicon glyphicon-shopping-cart"></span> Continue Shopping
          </button>
          {buyButton}
        </div>
      </div>
    )
  }
})

module.exports = CheckoutCart
