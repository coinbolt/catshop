/** @jsx React.DOM */

var React = require('react')
var productRemoved = require('./product-events').productRemoved
var config = require('@config')

var CartItem = React.createClass({
  handleRemove: function(e) {
    e.stopPropagation()
    productRemoved.publish(this.props.product)
  },
  
  render: function() {
    var price = config.unit === 'BITS' ? this.props.product.priceBits : this.props.product.price

    return (
      <tr>
        <td>
          <div className="media">
            <a className="thumbnail pull-left" href="#">
              <img className="media-object" src={this.props.product.image} />
            </a>
            <div className="media-body">
              <h4 className="media-heading">
                <a href="#">{this.props.product.name}</a>
              </h4>
            </div>
          </div>
        </td>
        <td className="col-sm-1 col-md-1 text-center">
          <strong>{ price }</strong>
        </td>
        <td className="col-sm-1 col-md-1">
          <button type="button" className="btn btn-danger" onClick={this.handleRemove}>
            <span className="glyphicon glyphicon-remove"></span> Remove
          </button>
        </td>
      </tr>
    )
  }
})

module.exports = CartItem
