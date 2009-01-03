/** @jsx React.DOM */

var CartItem = require('./cartitem');
var React = require('react');

var Cart = React.createClass({
  render: function() {
    var cartItems = this.props.products.map(function(product) {
      return <CartItem key={product.id} product={product} />
    });
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Product</th>
            <th className="text-center">Price</th>
            <th className="text-center">Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems}
          <tr>
            <td></td>
            <td><h3>Total</h3></td>
            <td className="text-right">
            <h3><strong>{this.props.totalPrice}</strong></h3></td>
          </tr>
        </tbody>
      </table>
    );
  }
});

module.exports = Cart;
