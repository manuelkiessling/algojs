"use strict";
if (typeof define !== 'function') { var define = require('amdefine')(module) }

var compareStrings = function(a, b) {
  var aString = a.join("");
  var bString = b.join("");
  if (aString.charCodeAt(0) < bString.charCodeAt(0)) {
    return -1;
  }
  if (aString.charCodeAt(0) === bString.charCodeAt(0)) {
    return 0;
  }
  if (aString.charCodeAt(0) > bString.charCodeAt(0)) {
    return 1;
  }
};

var compareNumbers = function(a, b) {
  var aNumber = a[0];
  var bNumber = b[0];
  if (aNumber < bNumber) {
    return -1;
  }
  if (aNumber === bNumber) {
    return 0;
  }
  if (aNumber > bNumber) {
    return 1;
  }
};

define(["../../lib/algorithm/mergesort"], function(mergesort) {
  describe("mergesort", function() {
    it("correctly sorts a string of characters", function() {
      expect(mergesort("mergesort".split(""), compareStrings)).toEqual("eegmorrst".split(""));
    });
    it("correctly sorts a list of numbers", function() {
      expect(mergesort([3, 4, 5, 7, 8, 9, 9, 0, 2, 3, 4, 1], compareNumbers)).toEqual([0, 1, 2, 3, 3, 4, 4, 5, 7, 8, 9, 9]);
    });
  });
});
