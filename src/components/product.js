/** @jsx React.DOM */

var React = require('react/addons')
var productAdded = require('./product-events').productAdded
var productRemoved = require('./product-events').productRemoved
var config = require('@config')

var cx = React.addons.classSet

var Product = React.createClass({
  getInitialState: function() {
    return {
      addedToCard: false
    }
  },

  addToCart: function() {
    this.setState({
      addedToCard: true
    })
    productAdded.publish(this.props.product)
  },

  componentDidMount: function() {
    productRemoved.subscribe(this.onProductRemoved)
  },

  componentWillUnmount: function() {
    productRemoved.unsubscribe(this.onProductRemoved)
  },

  onProductRemoved: function(e, removed) {
    if (removed === this.props.product || !removed) {
      this.setState({
        addedToCard: false
      })
    }
  },

  render: function() {
    var classes = cx({
      btn: true,
      'btn-success': true,
      'btn-lg': true,
      'btn-hidden': this.state.addedToCard
    })

    if (config.unit === 'BITS')
      priceStr = this.props.product.priceBits + ' BITS'
    else
      priceStr = this.props.product.price + ' BTC'
    
    return (
      <div className="col-6 col-sm-6 col-lg-4 cat">
        <img src={this.props.product.image} className="img-responsive" />
        <h2>{this.props.product.name}</h2>
        <h4>{ priceStr }</h4>
        <button className={classes} onClick={this.addToCart}>
          Add to Cart
        </button>
      </div>
    )
  }
})

module.exports = Product
