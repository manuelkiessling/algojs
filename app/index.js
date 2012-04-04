define(['../lib/datastructure/graph/EdgeNode',
        '../lib/datastructure/graph/Graph',
        '../lib/drawer/canvas',
        '../lib/traverse/bfs',
        '../lib/datastructure/Queue'],
  function(EdgeNode, Graph, canvasDrawer, bfs, Queue) {

    var graph = new Graph();

    graph.insertEdge(32, 66, EdgeNode);
    graph.insertEdge(72, 66, EdgeNode);
    graph.insertEdge(66, 14, EdgeNode);
    graph.insertEdge(14, 32, EdgeNode);
    graph.insertEdge(69, 66, EdgeNode);
    graph.insertEdge(88, 69, EdgeNode);
    graph.insertEdge(100, 88, EdgeNode);
    graph.insertEdge(28, 69, EdgeNode);
    graph.insertEdge(26, 14, EdgeNode);

    canvasDrawer.init(document.getElementById('canvas'), 10, 10, graph);

    var canvasLoop = setInterval(function() {
      canvasDrawer.update();
      canvasDrawer.draw();
    }, 1000 / 60);

    var eventQueue = new Queue();

    var callbacks = {
      startedProcessingVertex: function(vertexNumber) {
        eventQueue.enqueue(function() {
          canvasDrawer.setVertexStateProcessingStarted(vertexNumber);
        });
      },
      finishedProcessingVertex: function(vertexNumber) {
        eventQueue.enqueue(function() {
          canvasDrawer.setVertexStateProcessingFinished(vertexNumber);
        });
      },
      discoveredVertex: function(vertexNumber) {
        eventQueue.enqueue(function() {
          canvasDrawer.setVertexStateDiscovered(vertexNumber);
        });
      },
      foundEdge: function(startVertexNumber, endVertexNumber) {
        //
      }
    };

    bfs(graph, 32, callbacks);

    var eventLoop = setInterval(function() {
      var event = eventQueue.dequeue();
      if (typeof event === 'function') {
        event();
      }
    }, 500);
  }
);
