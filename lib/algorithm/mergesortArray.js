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
    var leftLength = left.length;
    var rightLength = right.length;
    var leftIndex = 0;
    var rightIndex = 0;
    while (leftIndex < leftLength && rightIndex < rightLength) {
      if (compare(left[leftIndex], right[rightIndex]) <= 0) { // item in left is smaller or equal
        merged.push(left[leftIndex]);
        leftIndex++;
      } else {
        merged.push(right[rightIndex]);
        rightIndex++;
      }
    }

    while (leftIndex < leftLength) {
      merged.push(left[leftIndex]);
      leftIndex++;
    }

    while (rightIndex < rightLength) {
      merged.push(right[rightIndex]);
      rightIndex++;
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
