/** @jsx React.DOM */

var addresses = require('./addresses');
var helloblock = require('./helloblock');
var React = require('react');

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
          <img src={addresses.generateQR(this.props.address, this.props.totalPrice)} />
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
