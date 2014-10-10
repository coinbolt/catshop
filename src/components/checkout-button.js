/** @jsx React.DOM */

var CheckoutModal = require('./checkout-modal')
var ModalTrigger = require('react-bootstrap').ModalTrigger
var productevents = require('./product-events')
var React = require('react')

var CheckoutButton = React.createClass({
  getInitialState: function() {
    return {
      products: []
    }
  },

  componentDidMount: function() {
    productevents.productAdded.subscribe(this.onProductAdded)
    productevents.productRemoved.subscribe(this.onProductRemoved)
  },

  componentWillUnmount: function() {
    productevents.productAdded.unsubscribe(this.onProductAdded)
    productevents.productRemoved.unsubscribe(this.onProductRemoved)
  },

  onProductAdded: function(event, product) {
    this.setState({
      products: this.state.products.concat(product)
    })
  },

  onProductRemoved: function(event, removed) {
    if (!removed) {
      this.setState({
        products: []
      })
    } else {
      this.setState({
        products: this.state.products.filter(function(product) {
          return product !== removed
        })
      })
    }
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
    )
  }
})

module.exports = CheckoutButton
