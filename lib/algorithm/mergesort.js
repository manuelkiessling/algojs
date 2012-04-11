"use strict";
if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(['../datastructure/Queue.js'], function(Queue) {

  var split = function(list) {
    var halfsize = Math.floor(list.length / 2);

    var left = new Queue();
    for (var i = 0; i < halfsize; i++) {
      left.enqueue(list.dequeue());
    }

    var right = new Queue();
    while (!list.isEmpty()) {
      right.enqueue(list.dequeue());
    }

    return {
      left: left,
      right: right
    }
  };

  var merge = function(left, right, compare) {
    var merged = new Queue();
    while (!left.isEmpty() && !right.isEmpty()) {
      if (compare(left.peek(), right.peek()) <= 0) { // item in left is smaller or equal
        merged.enqueue(left.dequeue());
      } else {
        merged.enqueue(right.dequeue());
      }
    }

    while (!left.isEmpty()) {
      merged.enqueue(left.dequeue());
    }

    while (!right.isEmpty()) {
      merged.enqueue(right.dequeue());
    }

    return merged;
  };

  var sort = function(list, compare) {
    if (list.isEmpty() || list.length === 1) {
      return list;
    } else {
      var sublists = split(list);
      var sublistleft = sublists.left;
      var sublistright = sublists.right;

      var left = sort(sublistleft, compare);
      var right = sort(sublistright, compare);

      return merge(left, right, compare);
    }
  };

  return sort;
});
