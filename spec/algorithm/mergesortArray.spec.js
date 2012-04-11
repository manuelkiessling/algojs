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

define(["../../lib/algorithm/mergesortArray"], function(mergesort) {
  describe("mergesort", function() {
    it("correctly sorts", function() {
      var unsorted = [4, 9, 7, 8, 1, 9];

      var sorted = mergesort(unsorted, compareNumbers);
      expect(sorted.join("")).toEqual("147899");
    });
  });
});
