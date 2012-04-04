"use strict";
if (typeof define !== 'function') { var define = require('amdefine')(module) }

define([], function() {
  var Graph = function() {
    this.edges = [];
  };

  Graph.prototype.insertEdge = function(vertexNumber, to, EdgeNode, directed) {
    var edgeNode = new EdgeNode(to, this.edges[vertexNumber]);
    this.edges[vertexNumber] = edgeNode;
    if (directed !== true) {
      this.insertEdge(to, vertexNumber, EdgeNode, true);
    }
  };

  return Graph;
});
