"use strict";

var VertexPosition = function(x, y) {
  this.age = Math.random() * 10;
  this.x = x;
  this.y = y;
};

VertexPosition.prototype.update = function() {
  this.age += 0.005;
  this.x += Math.sin((this.age) * Math.PI / 0.5) * 0.1;
  this.y += Math.sin((this.age) * Math.PI / 0.5) * 0.1;
}

VertexPosition.prototype.draw = function() {

}

define(['../helper/calculatePosition'], function(calculatePosition) {
  var canvasDrawer = {
    init: function(canvasElement, rows, cols, graph) {
      this.context = canvasElement.getContext('2d');
      this.options = {
        width: canvasElement.width,
        height: canvasElement.height,
        rows: rows,
        cols: cols
      };
      this.graph = graph;

      this.vertexPositions = [];
      var that = this;
      graph.edges.forEach(function(edgeNode, vertexNumber) {
        var position = calculatePosition(vertexNumber, that.options);
        that.vertexPositions[vertexNumber] = new VertexPosition(position.x, position.y);
      });
    },

    update: function() {
      this.vertexPositions.forEach(function(vertexPosition) {
        vertexPosition.update();
      });
    },

    draw: function() {
      this.context.fillStyle = '#fff';
      this.context.fillRect(0, 0, this.options.width, this.options.height);
      var that = this;
      this.vertexPositions.forEach(function(vertexPosition, vertexId) {
        that.context.fillStyle = '#000';
        that.context.font = '12pt sans-serif';
        that.context.textBaseline = 'top';
        that.context.fillText(vertexId, vertexPosition.x, vertexPosition.y);

        var node = that.graph.edges[vertexId];
        while (node !== undefined) {
          that.context.strokeStyle = '#090';
          that.context.beginPath();
          that.context.moveTo(vertexPosition.x, vertexPosition.y);
          that.context.lineTo(that.vertexPositions[node.to].x, that.vertexPositions[node.to].y);
          that.context.closePath();
          that.context.stroke();
          node = node.next;
        }
      });
    }
  };

  return canvasDrawer;
});
