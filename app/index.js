define(['../lib/EdgeNode', '../lib/insertEdge', '../lib/drawer/canvas'],
  function(EdgeNode, insertEdge, canvasDrawer) {

    var graph = {
      edges: []
    };

    insertEdge(graph, 1, 66, EdgeNode);
    insertEdge(graph, 72, 66, EdgeNode);
    insertEdge(graph, 66, 15, EdgeNode);
    insertEdge(graph, 15, 1, EdgeNode);
    insertEdge(graph, 69, 66, EdgeNode);
    insertEdge(graph, 88, 69, EdgeNode);
    insertEdge(graph, 100, 88, EdgeNode);
    insertEdge(graph, 28, 69, EdgeNode);
    insertEdge(graph, 6, 15, EdgeNode);

    canvasDrawer.init(document.getElementById('canvas'), 10, 10, graph);

    var loop = setInterval(function() {
      canvasDrawer.update();
      canvasDrawer.draw();
    }, 1000 / 60);

  }
);
