var PubSub = require('./pubsub')

module.exports.productAdded = new PubSub()
module.exports.productRemoved = new PubSub()
