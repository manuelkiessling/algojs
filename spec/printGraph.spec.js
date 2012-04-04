"use strict";
if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(["../lib/datastructure/graph/Graph", "../lib/datastructure/graph/EdgeNode", "../lib/printGraph"], function(Graph, EdgeNode, printGraph) {
  describe("printGraph", function() {
    it("correctly prints the graph", function() {
      var graph = new Graph();
      graph.insertEdge(1, 5, EdgeNode);
      graph.insertEdge(1, 3, EdgeNode);
      graph.insertEdge(2, 5, EdgeNode);

      var expectedOutput = "1 -> 3 -> 5 -> \n" +
                           "2 -> 5 -> \n" +
                           "3 -> 1 -> \n" +
                           "5 -> 2 -> 1 -> \n";
      var actualOutput = printGraph(graph);
      expect(actualOutput).toEqual(expectedOutput);
    });
  });
});
