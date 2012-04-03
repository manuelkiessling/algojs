"use strict";
if (typeof define !== 'function') { var define = require('amdefine')(module) }

define([], function() {
  var Queue = function() {
    this.first = null;
  };

  Queue.prototype.add = function(value) {
    var newItem = {
      value: value,
      next: null
    };
    if (this.first !== null) {
      var current = this.first;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newItem;
    } else {
      this.first = newItem;
    }
  };

  Queue.prototype.retrieve = function() {
    var value = this.first.value;
    this.first = this.first.next;
    return value;
  };

  return Queue;
});
