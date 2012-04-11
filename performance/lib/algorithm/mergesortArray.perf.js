"use strict";
if (typeof define !== 'function') { var define = require('amdefine')(module) }

var compareNumbers = function(a, b) {
  if (a < b) {
    return -1;
  }
  if (a === b) {
    return 0;
  }
  if (a > b) {
    return 1;
  }
};

define(["../../../lib/datastructure/Queue", "../../../lib/algorithm/mergesortArray"], function(Queue, mergesort) {
  var compareNumbers = function(a, b) {
    if (a < b) {
      return -1;
    }
    if (a === b) {
      return 0;
    }
    if (a > b) {
      return 1;
    }
  };

  var items = [];
  for (var i = 0; i < 10000000; i++) {
    items.push(Math.floor(Math.random() * 10000000));
  }

  var start = new Date().getTime();
  var sorted = mergesort(items, compareNumbers);
  var end = new Date().getTime();
  var time = end - start;
  console.log(time);
});
