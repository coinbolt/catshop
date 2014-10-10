/** @jsx React.DOM */

var React = require('react')
var OverlayMixin = require('react-bootstrap').OverlayMixin
var CheckoutModal = require('./checkout-modal')
var catData = require('@cat-data')
var url = require('@url')

var BoughtModalTrigger = React.createClass({
  mixins: [OverlayMixin],

  getInitialState: function () {
    return {
      isModalOpen: false
    }
  },

  handleToggle: function () {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  },

  openModal: function () {
    this.setState({
      isModalOpen: true
    })
  },

  closeModal: function() {
    /*this.setState({
      isModalOpen: false
    })*/
    window.location.href = window.location.origin
  },

  render: function () {
    //console.log('RENDER')
    //var cats = url.getCatsFromUrlConfig()
    //if (cats.length > 0)
    //  this.openModal()

    return (
      <span/>
    )
  },

  renderOverlay: function () {
    var cats = url.getCatsFromUrlConfig()
    return (
      <CheckoutModal products={ cats } screen="done" onRequestHide={ this.closeModal } />
    )
  }
})

module.exports = BoughtModalTrigger


