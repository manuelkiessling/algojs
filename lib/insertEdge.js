"use strict";

var insertEdge = function(graph, vertexNumber, to, EdgeNode) {
  var edgeNode = new EdgeNode(to, graph.edges[vertexNumber]);
  graph.edges[vertexNumber] = edgeNode;
};
