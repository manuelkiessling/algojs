"use strict";

var graph = {
  edges: []
};

var resetGraph = function() {
  graph = {
    edges: []
  };
};

var EdgeNode = function(to, next) {
  this.to = to;
  this.next = next;
};

describe("insertEdge", function() {
  beforeEach(function() {
    resetGraph();
  });

  it("inserts an egdeNode into the graph", function() {
    insertEdge(graph, 1, 5, EdgeNode);
    expect(graph.edges[1].to).toEqual(5);
    expect(graph.edges[1].next).toEqual(undefined);
    /**

     [1]->5->||

     */
  });

  it("inserts an additional edgeNode to the head of the list of its vertex", function() {
    insertEdge(graph, 1, 5, EdgeNode);
    insertEdge(graph, 1, 3, EdgeNode);
    expect(graph.edges[1].to).toEqual(3);
    expect(graph.edges[1].next.to).toEqual(5);
    expect(graph.edges[1].next.next).toEqual(undefined);
  });

  it("correctly inserts an edgeNode for another vertex", function() {
    insertEdge(graph, 1, 5, EdgeNode);
    insertEdge(graph, 1, 3, EdgeNode);
    insertEdge(graph, 2, 5, EdgeNode);
    expect(graph.edges[1].to).toEqual(3);
    expect(graph.edges[1].next.to).toEqual(5);
    expect(graph.edges[1].next.next).toEqual(undefined);
    expect(graph.edges[2].to).toEqual(5);
    expect(graph.edges[2].next).toEqual(undefined);
  });
});
