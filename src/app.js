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
              <a className="navbar-brand" href="#">Coinbolt Cat Shop - Bitcon Test Network</a>
            </div>

            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><CheckoutButton /></li>
                <li><a href="https://www.coinbolt.com">Return to Coinbolt</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          <ProductList data={this.props.products} />
        </div>
      </div>
    )
  }
})

module.exports = App
