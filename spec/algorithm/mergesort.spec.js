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

define(["../../lib/datastructure/Queue", "../../lib/algorithm/mergesort"], function(Queue, mergesort) {
  describe("mergesort", function() {
    it("correctly sorts", function() {
      var unsorted = new Queue();
      unsorted.enqueue(4);
      unsorted.enqueue(9);
      unsorted.enqueue(7);
      unsorted.enqueue(8);
      unsorted.enqueue(1);
      unsorted.enqueue(9);

      var sorted = mergesort(unsorted, compareNumbers);
      var sortedString = "";
      while (!sorted.isEmpty()) {
        sortedString = sortedString + "" + sorted.dequeue();
      }

      expect(sortedString).toEqual("147899");
    });
  });
});
