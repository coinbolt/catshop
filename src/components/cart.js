/** @jsx React.DOM */

var React = require('react')
var CartItem = require('./cart-item')
var config = require('@config')

var Cart = React.createClass({
  render: function() {
    var totalPrice = config.unit === 'BITS' ? this.props.totalPriceBits : this.props.totalPrice

    var cartItems = this.props.products.map(function(product) {
      return <CartItem key={product.id} product={product} />
    })

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Product</th>
            <th className="text-center">Price ({ config.unit })</th>
            <th className="text-center">Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems}
          <tr>
            <td></td>
            <td>Total</td>
            <td className="text-right">
              <strong>{ totalPrice } { config.unit }</strong>
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
})

module.exports = Cart
