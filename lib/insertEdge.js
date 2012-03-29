"use strict";
if (typeof define !== 'function') { var define = require('amdefine')(module) }

define([], function() {
  var insertEdge = function(graph, vertexNumber, to, EdgeNode) {
    var edgeNode = new EdgeNode(to, graph.edges[vertexNumber]);
    graph.edges[vertexNumber] = edgeNode;
  };
  return insertEdge;
});
