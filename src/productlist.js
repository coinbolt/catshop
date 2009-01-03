/**
 * @jsx React.DOM
 */

var React = require('react');

var Product = require('./product');

var ProductList = React.createClass({

  render: function() {
    var productNodes = this.props.data.map(function(product) {
        return (
            <Product
                key={product.id}
                name={product.name}
                image={product.image}
                price={product.price} />
        );
    });
    return (
      <div className="row">
        {productNodes}
      </div>
    );
  }
});

module.exports = ProductList;
