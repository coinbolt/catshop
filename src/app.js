/** @jsx React.DOM */

var CheckoutButton = require('./CheckoutButton')
var ProductList = require('./productlist')
var React = require('react')

var App = React.createClass({
  render: function() {
    return (
      <div>
        <div className="navbar navbar-fixed-top navbar-inverse" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Bitcoin Test Network - Cat Shop</a>
            </div>

            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><CheckoutButton /></li>
                <li><a href="https://www.coinbolt.com">Return to Coinbolt</a></li>
              </ul>
            </div>
          </div>
        </div>

        <ProductList data={this.props.products} />
      </div>
    )
  }
})

module.exports = App
