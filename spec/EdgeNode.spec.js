"use strict";
if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(["../lib/EdgeNode"], function(EdgeNode) {
  describe("EdgeNode", function() {
    it("returns a new EdgeNode", function() {
      var next = new EdgeNode(2, null);
      var e = new EdgeNode(5, next);
      expect(e.to).toEqual(5);
      expect(e.next).toEqual(next);
    });
  });
});
