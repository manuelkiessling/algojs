"use strict";

var graph = {
  edges: []
};

var createGraph = function() {
  insertEdge(graph, 1, 5, EdgeNode);
  insertEdge(graph, 1, 3, EdgeNode);
  insertEdge(graph, 2, 5, EdgeNode);
};

describe("printGraph", function() {
  beforeEach(function() {
    graph.edges = [];
    createGraph();
  });

  it("correctly prints the graph", function() {
    var expectedOutput = "1 -> 3 -> 5 -> \n" +
                         "2 -> 5 -> \n";
    var actualOutput = printGraph(graph);
    expect(actualOutput).toEqual(expectedOutput);
  });
});
