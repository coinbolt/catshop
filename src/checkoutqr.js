/** @jsx React.DOM */

var helloblock = require('./helloblock');
var qr = require('qr-encode');
var React = require('react');
var util = require('util');

function generateQR(address, amount) {
  var url = util.format('bitcoin:%s?amount=%d', address, amount);
  var dataUri = qr(url, {type: 6, size: 6, level: 'Q'});
  return dataUri;
}

var CheckoutQR = React.createClass({
  getInitialState: function() {
    return {
      done: false,
      status: 'Not confirmed'
    };
  },
  componentDidMount: function() {
    helloblock.connectAndListenForTx(this.props.address, function(err, data) {
      console.log.apply(console, arguments);
      if (err) {
        this.setState({
          done: true,
          status: 'Failed: ' + err
        });
      } else {
        this.setState({
          done: true,
          status: 'Confirmed: ' + err
        });
      }
    }.bind(this));
  },
  render: function() {
    return (
      <div>
        <div className="modal-body center">
          <p>Pay {this.props.totalPrice} BTC to {this.props.address}</p>
          <img src={generateQR(this.props.address, this.props.totalPrice)} />
          <div>Status: {this.state.status}</div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" onClick={this.props.onRequestHide}>
            <span className="glyphicon glyphicon-shopping-cart"></span> Cancel
          </button>
          <button type="button" className="btn btn-success" disabled={!this.state.done} onClick={this.props.onRequestHide}>
            Done <span className="glyphicon glyphicon-play"></span>
          </button>
        </div>
      </div>
    );
  }
});

module.exports = CheckoutQR;
