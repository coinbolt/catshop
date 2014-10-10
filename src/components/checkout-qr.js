/** @jsx React.DOM */

var util = require('util')
var qr = require('qr-encode')
var React = require('react')
var addresses = require('@addresses')
var helloblock = require('@helloblock')
var settings = require('@settings')
var productRemoved = require('./product-events').productRemoved

function getUrl(protocol, address, amount) {
  return util.format('%s:%s?amount=%d', protocol, address, amount)
}

function generateQR(address, amount) {
  var url = getUrl('bitcoin', address, amount)
  var dataUri = qr(url, {type: 6, size: 4, level: 'Q'})
  return dataUri
}

var CheckoutQR = React.createClass({
  getInitialState: function() {
    return {
      done: false,
      status: 'Not confirmed',
      paidValue: 0
    }
  },

  componentDidMount: function() {
    var address = this.props.address
    this.connection = helloblock.connectAndListenForTx(address, function(tx) {
      var value = tx.outputs.filter(function(output) {
        return output.address === address
      }).reduce(function(value, output) {
        return value + output.value
      }, 0)
      this.setState({
        done: true,
        status: 'Confirmed (' + tx.confirmations + ')',
        paidValue: this.state.paidValue + (value / 100000000)
      })
    }.bind(this), function(error) {
      this.setState({
        done: true,
        status: 'Failed: ' + err,
        paidValue: 0
      })
    }.bind(this))
  },

  componentWillUnmount: function() {
    this.connection.close()
  },

  handleDoneClick: function(e) {
    //increment index for next address
    var master = settings.get('masterkey')
    master.index += 1
    settings.set('masterkey', master)

    productRemoved.publish(null)
    this.props.onRequestHide(e)
  },

  render: function() {
    var doneEnabled = this.state.done && (this.state.paidValue >= this.props.totalPrice)
    
    return (
      <div>
        <div className="modal-body center">
          <p>
            Please send {this.props.totalPrice} BTC to
            <br/>
            <a href={ getUrl('bitcoin', this.props.address, this.props.totalPrice) }>
              <strong>{ this.props.address }</strong>
            </a>
          </p> 
          <p>(already paid {this.state.paidValue})</p>
          <img src={generateQR(this.props.address, this.props.totalPrice)} />
            { this.state.paidValue === 0 ? <p>Waiting &nbsp;<i className="fa fa-spinner fa-spin"></i></p> : null }
          <p>Status:&nbsp;
            { this.state.paidValue >= this.props.totalPrice ? <span className="glyphicon glyphicon-ok"></span> : null }
            {this.state.status}
          </p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" onClick={this.props.onRequestHide}>
            Cancel
          </button>
          <button type="button" className="btn btn-success" disabled={!doneEnabled} onClick={this.handleDoneClick}>
            Done <span className="glyphicon glyphicon-play"></span>
          </button>
        </div>
      </div>
    )
  }
})

module.exports = CheckoutQR
