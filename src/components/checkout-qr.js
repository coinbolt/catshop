/** @jsx React.DOM */

var util = require('util')
var qr = require('qr-encode')
var React = require('react')
var addresses = require('@addresses')
var helloblock = require('@helloblock')
var storage = require('@storage')
var config = require('@config')
var urlUtil = require('@url')
var productRemoved = require('./product-events').productRemoved

function getUrl(protocol, address, amount, rurl) {
  if (!rurl)
    return util.format('%s:%s?amount=%d', protocol, address, amount)
  else
    return util.format('%s:%s?amount=%d&r=%s', protocol, address, amount, encodeURIComponent(rurl))
}
  
function generateQR(address, amount) {
  var url = getUrl('bitcoin', address, amount)
  var dataUri = qr(url, {type: 6, size: 3, level: 'Q'})
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

      this.handleDone()
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

  handleDone: function(e) {
    //increment index for next address
    var master = storage.get('masterkey')
    master.index += 1
    storage.set('masterkey', master)

    this.props.onDone()
  },

  render: function() {
    var doneEnabled = this.state.done && (this.state.paidValue >= this.props.totalPrice)
    
    var modalBodyStyles = {
      padding: '0px'
    }

    var priceStr = config.unit === 'BITS' ? this.props.totalPriceBits + ' BITS' : this.props.totalPrice + ' BTC'

    //faux bip70-72 support, TODO: add it (need server component)
    //this is pretty eewwww
    var burl = urlUtil.getBoughtUrlConfig(this.props.products)
    console.log(burl)

    var url = config.protocol === 'coinbolt' ? getUrl(config.protocol, this.props.address, this.props.totalPrice, burl)
                                             : getUrl(config.protocol, this.props.address, this.props.totalPrice)

    console.log(url)

    return (
      <div>
        <div className="modal-body" id="checkout-qr" style={ modalBodyStyles }>
          <p>
            Please send { priceStr } to
            <br/>
            (scan QR or click here): <a href={ url }>
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
          <button type="button" className="btn btn-success" disabled={!doneEnabled} onClick={ this.handleDone }>
            Done <span className="glyphicon glyphicon-play"></span>
          </button>
        </div>
      </div>
    )
  }
})

module.exports = CheckoutQR
