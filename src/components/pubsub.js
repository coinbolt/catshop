/* jQuery Tiny Pub/Sub - v0.7 - 10/27/2011
 * http://benalman.com/
 * Copyright (c) 2011 "Cowboy" Ben Alman; Licensed MIT, GPL */

function PubSub() {
  this.object = $(this);
}

PubSub.prototype.subscribe = function(callback) {
  this.object.on.call(this.object, 'event', callback);
};

PubSub.prototype.unsubscribe = function(callback) {
  this.object.off.call(this.object, 'event', callback);
};

PubSub.prototype.publish = function(value) {
  this.object.trigger.call(this.object, 'event', value);
};

module.exports = PubSub;
