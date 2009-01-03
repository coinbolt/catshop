/**
 * @jsx React.DOM
 */

var React = require('react');

var Product = React.createClass({

  render: function() {
    return (
        <div className="col-6 col-sm-6 col-lg-4 cat">
            <img src={this.props.image} className="img-responsive" />
            <h2>{this.props.name}</h2>
            <h4>{this.props.price} BTC</h4>
            <button className="btn btn-success btn-lg">Add to Cart</button>
        </div>
    );
  }
});

module.exports = Product;
