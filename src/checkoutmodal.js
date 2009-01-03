/** @jsx React.DOM */

var React = require('react');

var Modal = require('react-bootstrap').Modal;

var Cart = require('./cart');

var addresses = require('./addresses');

var CheckoutModal = React.createClass({
  getInitialState: function() {
    return {
      screen: 'cart'
    };
  },
  onCheckout: function() {
    this.setState({screen: 'checkout'});
  },
  render: function() {
    var totalPrice = this.props.products.reduce(function(price, product) {
      return price + product.price;
    }, 0);
    var contents, buyButton;
    if (this.state.screen === 'cart') {
      if (this.props.products.length > 0) {
        buyButton = <button type="button" className="btn btn-success" onClick={this.onCheckout}>
                Buy now <span className="glyphicon glyphicon-play"></span>
            </button>;
      }
        contents = <div><div className="modal-body">
            <Cart products={this.props.products} totalPrice={totalPrice} />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" onClick={this.props.onRequestHide}>
                <span className="glyphicon glyphicon-shopping-cart"></span> Continue Shopping
            </button>
            {buyButton}
          </div></div>;
    } else {
      var address = addresses.getPaymentAddress();
      contents = <div>
        <div className="modal-body center">
          <p>Pay {totalPrice} BTC to {address}</p>
          <img src={addresses.generateQR(address, totalPrice)} />
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" onClick={this.props.onRequestHide}>
              <span className="glyphicon glyphicon-shopping-cart"></span> Cancel
          </button>
          <button type="button" className="btn btn-success">
              Pay <span className="glyphicon glyphicon-play"></span>
          </button>
        </div>
      </div>;
    }
    return this.transferPropsTo(
        <Modal title="Cart">
          {contents}
        </Modal>
      );
  }
});

module.exports = CheckoutModal;
