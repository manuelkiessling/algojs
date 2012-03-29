"use strict";

var printGraph = function(graph) {
  var output = "";
  graph.edges.forEach(function(edgeNode, vertexNumber) {
    output += vertexNumber + " -> ";
    var node = edgeNode;
    while (node != undefined) {
      output += node.to + " -> ";
      node = node.next;
    }
    output += "\n";
  });
  return output;
};
