/** @jsx React.DOM */

var React = require('react')

var ProductSummary = React.createClass({
  render: function() {
    var quoteStyles = {
      textAlign: 'left',
      fontSize: '14px'
    }

    var footerStyles = {
      padding: '0px'
    }

    return (
      <tr>
        <td>
          <div className="media">
            <h4 className="media-heading pull-left">
              <a href="#">{this.props.product.name}</a>
            </h4>
            <a className="thumbnail pull-left" href="#">
              <img className="media-object" src={this.props.product.image} />
            </a>
          </div>
        </td>
        <td>
          <blockquote style={ quoteStyles }>
            <p>{ this.props.product.quote.text }</p>
            <footer style={ footerStyles }>{ this.props.product.quote.author }</footer>
          </blockquote>
        </td>
      </tr>
    )
  }
})

module.exports = ProductSummary
