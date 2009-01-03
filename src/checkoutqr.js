/** @jsx React.DOM */

var addresses = require('./addresses');
var React = require('react');

var CheckoutQR = React.createClass({
  render: function() {
    return (
      <div>
        <div className="modal-body center">
          <p>Pay {this.props.totalPrice} BTC to {this.props.address}</p>
          <img src={addresses.generateQR(this.props.address, this.props.totalPrice)} />
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" onClick={this.props.onRequestHide}>
            <span className="glyphicon glyphicon-shopping-cart"></span> Cancel
          </button>
          <button type="button" className="btn btn-success">
            Pay <span className="glyphicon glyphicon-play"></span>
          </button>
        </div>
      </div>
    );
  }
});

module.exports = CheckoutQR;
