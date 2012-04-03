"use strict";
if (typeof define !== 'function') { var define = require('amdefine')(module) }

define([], function() {
  var Queue = function() {
    this.first = undefined;
    this.last = undefined;
  };

  Queue.prototype.enqueue = function(value) {
    var newItem = {
      value: value,
      next: undefined
    };
    if (this.first === undefined && this.last === undefined) {
      this.first = newItem;
    } else {
      this.last.next = newItem;
    }
    this.last = newItem;
  };

  Queue.prototype.dequeue = function() {
    if (this.first == undefined) {
      return undefined;
    }
    var value = this.first.value;
    this.first = this.first.next;
    if (this.first == undefined) {
      this.last = undefined;
    }
    return value;
  };

  return Queue;
});
