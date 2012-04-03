"use strict";
if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(['../helper/Queue'], function(Queue) {
  var bfs = function(graph, startVertexNumber, callbacks) {
    var discovered = [];
    var processed = [];
    var parent = [];
    var queue = new Queue;

    graph.edges.forEach(function(edgeNode, vertexNumber) {
      discovered[vertexNumber] = processed[vertexNumber] = false;
      parent[vertexNumber] = null;
    });

    queue.enqueue(startVertexNumber);
    discovered[startVertexNumber] = true;

    while (!queue.isEmpty()) {
      var currentVertexNumber = queue.dequeue();
      callbacks.startedProcessingVertex(currentVertexNumber);
      processed[currentVertexNumber] = true;
      var edgeNode = graph.edges[currentVertexNumber];
      while (edgeNode !== undefined) {
        var successorVertexNumber = edgeNode.to;
        if (!processed[successorVertexNumber]) {
          callbacks.foundEdge(currentVertexNumber, successorVertexNumber);
        }
        if (!discovered[successorVertexNumber]) {
          queue.enqueue(successorVertexNumber);
          discovered[successorVertexNumber] = true;
          parent[successorVertexNumber] = currentVertexNumber;
          callbacks.discoveredVertex(successorVertexNumber);
        }
        edgeNode = edgeNode.next;
      }
      callbacks.finishedProcessingVertex(currentVertexNumber);
    }
  };

  return bfs;
});
