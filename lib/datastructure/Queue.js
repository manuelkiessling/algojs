"use strict";
if (typeof define !== 'function') { var define = require('amdefine')(module) }

define([], function() {
  var Queue = function() {
    this.first = undefined;
    this.last = undefined;
    this.length = 0;
  };

  Queue.prototype.enqueue = function(value) {
    var newItem = {
      value: value,
      next: undefined
    };
    if (this.isEmpty()) {
      this.first = newItem;
    } else {
      this.last.next = newItem;
    }
    this.last = newItem;
    this.length++;
  };

  Queue.prototype.dequeue = function() {
    if (this.first == undefined) {
      return undefined;
    }
    this.length--;
    var value = this.first.value;
    this.first = this.first.next;
    if (this.first == undefined) {
      this.last = undefined;
    }
    return value;
  };

  Queue.prototype.peek = function() {
    if (this.first == undefined) {
      return undefined;
    }
    return this.first.value;
  };

  Queue.prototype.itemAt = function(index) {
    if (this.first == undefined || index > this.length - 1) {
      return undefined;
    }
    var cur = this.first;
    for (var i = 0; i < index; i++) {
      cur = cur.next;
    }
    return cur;
  };

  Queue.prototype.isEmpty = function() {
    return (this.length === 0);
  };

  return Queue;
});
