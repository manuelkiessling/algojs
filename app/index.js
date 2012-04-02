define(['../lib/EdgeNode', '../lib/insertEdge', '../lib/drawer/canvas'],
  function(EdgeNode, insertEdge, canvasDrawer) {

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

    var loop = setInterval(function() {
      canvasDrawer.update();
      canvasDrawer.draw();
    }, 1000 / 60);

  }
);
