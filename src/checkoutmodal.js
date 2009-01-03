/** @jsx React.DOM */

var React = require('react');

var Modal = require('react-bootstrap').Modal;

var Cart = require('./cart');

var CheckoutModal = React.createClass({
  render: function() {
    return this.transferPropsTo(
        <Modal title="Cart" animation={false}>
          <div className="modal-body">
            <Cart products={this.props.products} />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" onClick={this.props.onRequestHide}>
                <span className="glyphicon glyphicon-shopping-cart"></span> Continue Shopping
            </button>
            <button type="button" className="btn btn-success">
                Checkout <span className="glyphicon glyphicon-play"></span>
            </button>
          </div>
        </Modal>
      );
  }
});

module.exports = CheckoutModal;
