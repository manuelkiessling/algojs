"use strict";
if (typeof define !== 'function') { var define = require('amdefine')(module) }

var graph;

define(["../../../lib/datastructure/graph/Graph", "../../../lib/datastructure/graph/EdgeNode"], function(Graph, EdgeNode) {
  describe("Graph", function() {
    beforeEach(function() {
      graph = new Graph();
    });

    it("inserts an egdeNode into the graph, in both directions", function() {
      graph.insertEdge(1, 5, EdgeNode);
      expect(graph.edges[1].to).toEqual(5);
      expect(graph.edges[5].to).toEqual(1);
      expect(graph.edges[1].next).toEqual(undefined);
      expect(graph.edges[5].next).toEqual(undefined);
      /**
            Graph looks like
            1 -> 5 ->
            5 -> 1 ->
       */
    });

    it("inserts an additional edgeNode to the head of the list of its vertex", function() {
      graph.insertEdge(1, 5, EdgeNode);
      graph.insertEdge(1, 3, EdgeNode);
      expect(graph.edges[1].to).toEqual(3);
      expect(graph.edges[1].next.to).toEqual(5);
      expect(graph.edges[1].next.next).toEqual(undefined);
      /**
            Graph looks like
            1 -> 3 -> 5 ->
            5 -> 1 ->
            3 -> 1 ->
       */
    });

    it("correctly inserts an edgeNode for another vertex", function() {
      graph.insertEdge(1, 5, EdgeNode);
      graph.insertEdge(1, 3, EdgeNode);
      graph.insertEdge(2, 5, EdgeNode);
      expect(graph.edges[1].to).toEqual(3);
      expect(graph.edges[1].next.to).toEqual(5);
      expect(graph.edges[1].next.next).toEqual(undefined);
      expect(graph.edges[2].to).toEqual(5);
      expect(graph.edges[2].next).toEqual(undefined);
      /**
            Graph looks like
            1 -> 3 -> 5 ->
            2 -> 5 ->
       */
    });
  });
});
