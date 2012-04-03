"use strict";
if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(["../../lib/helper/Queue"], function(Queue) {
  describe("queue", function() {

    it("retrieves and removes items FIFO", function() {
      var queue = new Queue();
      queue.enqueue("a");
      queue.enqueue("b");
      queue.enqueue("c");
      queue.enqueue("d");
      var expected = queue.dequeue();
      expect(expected).toEqual("a");
      var expected = queue.dequeue();
      expect(expected).toEqual("b");
    });

    it("returns undefined if queue is empty", function() {
      var queue = new Queue();
      queue.enqueue("a");
      queue.enqueue("b");
      queue.dequeue();
      queue.dequeue();
      var expected = queue.dequeue();
      expect(expected).toEqual(undefined);
    });

    it("works if filled queue becomes empty and filled again", function() {
      var queue = new Queue();
      queue.enqueue("a");
      queue.enqueue("b");
      queue.dequeue();
      queue.dequeue();
      queue.enqueue("c");
      queue.enqueue("d");
      var expected = queue.dequeue();
      expect(expected).toEqual("c");
      queue.dequeue();
      var expected = queue.dequeue();
      expect(expected).toEqual(undefined);
    });

    it("correctly recognizes itself as empty", function() {
      var queue = new Queue();
      expect(queue.isEmpty()).toEqual(true);
      queue.enqueue("a");
      expect(queue.isEmpty()).toEqual(false);
      queue.dequeue();
      expect(queue.isEmpty()).toEqual(true);
    });


  });
});
