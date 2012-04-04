define(['../lib/EdgeNode',
        '../lib/insertEdge',
        '../lib/drawer/canvas',
        '../lib/traverse/bfs',
        '../lib/helper/Queue'],
  function(EdgeNode, insertEdge, canvasDrawer, bfs, Queue) {

    var graph = {
      edges: []
    };

    insertEdge(graph, 32, 66, EdgeNode);
    insertEdge(graph, 72, 66, EdgeNode);
    insertEdge(graph, 66, 14, EdgeNode);
    insertEdge(graph, 14, 32, EdgeNode);
    insertEdge(graph, 69, 66, EdgeNode);
    insertEdge(graph, 88, 69, EdgeNode);
    insertEdge(graph, 100, 88, EdgeNode);
    insertEdge(graph, 28, 69, EdgeNode);
    insertEdge(graph, 26, 14, EdgeNode);

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
