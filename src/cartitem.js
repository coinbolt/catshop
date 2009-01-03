/** @jsx React.DOM */

var React = require('react');

var CartItem = React.createClass({
  render: function() {
    return (
        <tr>
            <td>
            <div className="media">
                <a className="thumbnail pull-left" href="#"> <img className="media-object" src={this.props.product.image} /> </a>
                <div className="media-body">
                    <h4 className="media-heading"><a href="#">{this.props.product.name} </a></h4>
                </div>
            </div></td>
            <td className="col-sm-1 col-md-1 text-center"><strong>{this.props.product.price} </strong></td>
            <td className="col-sm-1 col-md-1">
            <button type="button" className="btn btn-danger">
                <span className="glyphicon glyphicon-remove"></span> Remove
            </button></td>
        </tr>
      );
  }
});

module.exports = CartItem;
