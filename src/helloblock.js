function connectAndListenForTx(address, callback, errback) {
  var _ws = new WebSocket('wss://socket-testnet.helloblock.io')

  _ws.onopen = function() {
    _ws.send(JSON.stringify({
      'op': 'subscribe',
      'channel': 'addresses/transactions',
      'filters': [address]
    }))
  }

  // https://helloblock.io/docs/ref#addresses-transactions
  _ws.onmessage = function(event) {
    var data = JSON.parse(event.data).data
    if (data && data.transaction) {
      callback(data.transaction)
    }
  }

  _ws.onerror = function(err) {
    errback(err)
  }

  return {
    close: function() {
      var isClosed = _ws.readyState === 2 || _ws.readyState === 3
      if (!isClosed) {
        _ws.close()
      }
    }
  }
}

module.exports = {
  connectAndListenForTx: connectAndListenForTx
}

