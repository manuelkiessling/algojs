"use strict";
if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(["../../lib/helper/Queue"], function(Queue) {
  describe("queue", function() {
    it("retrieves and removes items FIFO", function() {
      var queue = new Queue();
      queue.add("a");
      queue.add("b");
      queue.add("c");
      queue.add("d");
      var expected = queue.retrieve();
      expect(expected).toEqual("a");
      var expected = queue.retrieve();
      expect(expected).toEqual("b");
    });
  });
});
