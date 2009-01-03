/**
 * @jsx React.DOM
 */

var React = require('react');

var productAdded = require('./productAdded');

var Product = React.createClass({
  getInitialState: function() {
    return {
        addedToCard: false
    };
  },
  addToCart: function() {
    this.setState({
        addedToCard: true
    });
    productAdded.publish(this.props.id);
  },
  render: function() {
    var cartAction;
    if (this.state.addedToCard) {
        cartAction = <span className="btn btn-lg">In cart</span>;
    } else {
        cartAction = <button className="btn btn-success btn-lg" onClick={this.addToCart}>Add to Cart</button>;
    }
    return (
        <div className="col-6 col-sm-6 col-lg-4 cat">
            <img src={this.props.image} className="img-responsive" />
            <h2>{this.props.name}</h2>
            <h4>{this.props.price} BTC</h4>
            {cartAction}
        </div>
    );
  }
});

module.exports = Product;
