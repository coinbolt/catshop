/** @jsx React.DOM */

var React = require('react')
var ProductSummary = require('./product-summary')
var productRemoved = require('./product-events').productRemoved

var CheckoutDone = React.createClass({
  handleDoneClick: function(e) {
    productRemoved.publish(null)
    this.props.onRequestHide(e)
  },

  render: function() {
    var summaries = this.props.products.map(function(product) {
      return <ProductSummary key={ product.id } product={ product } />
    })
    
    return (
      <div>
        <div className="modal-body center">
          <h3>Your cats are on their way!</h3>
          <h3>(just kidding)</h3>
          <h5>But here are their favorite liberty quotes:</h5>
          <table className="table table-hover">
            <thead></thead>
            <tbody>
              { summaries }
            </tbody>
          </table>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-success" onClick={ this.handleDoneClick }>
            Done <span className="glyphicon glyphicon-play"></span>
          </button>
        </div>
      </div>
    )
  }
})

module.exports = CheckoutDone
