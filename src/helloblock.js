var _ws

function connectAndListenForTx(address, callback) {
  _ws = new WebSocket('wss://socket-testnet.helloblock.io')
  _ws.onopen = function() {
    _ws.send(JSON.stringify({
      'op': 'subscribe',
      'channel': 'addresses/transactions',
      'filters': [address]
    }))
  }

  //https://helloblock.io/docs/ref#addresses-transactions
  _ws.onmessage = function(event) {
    _ws.close()
    callback(undefined, event.data)
  }

  _ws.onerror = function(err) {
    _ws.close()
    callback(err)
  }
}

function close() {
  if (_ws) return
  var isClosed = _ws.readyState === 2 || _ws.readyState === 3
  !isClosed && _ws.close()
}

module.exports = {
  close: close,
  connectAndListenForTx: connectAndListenForTx
}

