/** @jsx React.DOM */

var React = require('react')
var Modal = require('react-bootstrap').Modal

var AboutModal = React.createClass({
  getInitialState: function() {
    return {}
  },
  render: function() {
    return this.transferPropsTo(
      <Modal title="About" id="about">
        <div className="modal-body">
          <p>
            The <a href="https://www.coinbolt.com/catshop">Coinbolt Cat Shop</a> enables you to experience buying things online
            with bitcoin without actually having to own any real bitcoin.
          </p>
          <ol>
            <li>
              You need to get a wallet that supports the <a href="https://en.bitcoin.it/wiki/Testnet">Bitcoin testnet</a>.
            </li>
            <li>
              Next you need to acquire testnet coins from either <a href="http://tpfaucet.appspot.com/">TP Testnet Faucet</a> or
              <a href="http://faucet.xeno-genesis.com/"> Mojocoin Testnet Faucet</a>
            </li>
            <li>
              Buy your fake cats on Coinbolt Catshop!
            </li>
          </ol>
          <br/>
          <p>
            Coinbolt Cat Shop is open source; the code can be found here: <a href="https://github.com/coinbolt/catshop">
            https://github.com/coinbolt/catshop</a>
          </p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" onClick={this.props.onRequestHide}>
            Close
          </button>
        </div>
      </Modal>
    )
  }
})

module.exports = AboutModal
