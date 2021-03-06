"use strict";
if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(["../../lib/datastructure/Queue", "../../lib/algorithm/mergesortQueue"], function(Queue, mergesort) {
  var compareNumbers = function(a, b) {
    return a - b;
  };

  var numItems = 1000000;
  var items = new Queue();
  for (var i = 0; i < numItems; i++) {
    items.enqueue(Math.floor(Math.random() * numItems));
  }

  var start = new Date().getTime();
  var sorted = mergesort(items, compareNumbers);
  var end = new Date().getTime();
  var time = end - start;
  console.log(numItems + " items sorted");
  console.log(time / 1000 + " seconds");
  console.log((numItems / time) * 1000 + " items / second");
});
