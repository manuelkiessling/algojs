"use strict";
if (typeof define !== 'function') { var define = require('amdefine')(module) }

define([], function() {

  var split = function(list) {
    var halfsize = Math.floor(list.length / 2);
    var left = list.splice(0, halfsize);
    var right = list;
    return {
      left: left,
      right: right
    }
  };

  var merge = function(left, right, compare) {
    var merged = [];
    while (left.length > 0 && right.length > 0) {
      if (compare(left.slice(0, 1), right.slice(0, 1)) <= 0) { // item in left is smaller or equal
        merged.push(left.shift());
      } else {
        merged.push(right.shift());
      }
    }
    
    while (left.length > 0) {
      merged.push(left.shift());
    }

    while (right.length > 0) {
      merged.push(right.shift());
    }

    return merged;
  };

  var mergesort = function(list, compare) {
    if (list.length <= 1) {
      return list;
    } else {
      var sublists = split(list);
      var sublistleft = sublists.left;
      var sublistright = sublists.right;

      var left = mergesort(sublistleft, compare);
      var right = mergesort(sublistright, compare);

      return merge(left, right, compare);
    }
  };

  return mergesort;
});
