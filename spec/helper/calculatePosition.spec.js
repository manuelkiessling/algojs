"use strict";
if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(["../../lib/helper/calculatePosition"], function(calculatePosition) {
  describe("calculatePosition", function() {
    it("places item 8 at 448,0", function() {
      var options = {
        width: 640,
        height: 500,
        rows: 10,
        cols: 10
      };
      var position = calculatePosition(8, options);
      expect(position.x).toEqual(448);
      expect(position.y).toEqual(0);
    });

    it("places item 10 at 576,0", function() {
      var options = {
        width: 640,
        height: 500,
        rows: 10,
        cols: 10
      };
      var position = calculatePosition(10, options);
      expect(position.x).toEqual(576);
      expect(position.y).toEqual(0);
    });

    it("places item 11 at 0,50", function() {
      var options = {
        width: 640,
        height: 500,
        rows: 10,
        cols: 10
      };
      var position = calculatePosition(11, options);
      expect(position.x).toEqual(0);
      expect(position.y).toEqual(50);
    });

    it("places item 100 at 576,450", function() {
      var options = {
        width: 640,
        height: 500,
        rows: 10,
        cols: 10
      };
      var position = calculatePosition(100, options);
      expect(position.x).toEqual(576);
      expect(position.y).toEqual(450);
    });
  });
});
