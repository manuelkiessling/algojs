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

      this.vertexState = [];

      this.vertexPositions = [];
      var that = this;
      graph.edges.forEach(function(edgeNode, vertexNumber) {
        var position = calculatePosition(vertexNumber, that.options);
        that.vertexPositions[vertexNumber] = new VertexPosition(position.x, position.y);
      });
    },

    setVertexStateDiscovered: function(vertexNumber) {
      this.vertexState[vertexNumber] = 'discovered';
    },

    setVertexStateProcessingStarted: function(vertexNumber) {
      this.vertexState[vertexNumber] = 'processingStarted';
    },

    setVertexStateProcessingFinished: function(vertexNumber) {
      this.vertexState[vertexNumber] = 'processingFinished';
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
      this.vertexPositions.forEach(function(vertexPosition, vertexNumber) {
        var node = that.graph.edges[vertexNumber];
        while (node !== undefined) {
          that.context.strokeStyle = '#090';
          that.context.beginPath();
          that.context.moveTo(vertexPosition.x + 10, vertexPosition.y + 8);
          that.context.lineTo(that.vertexPositions[node.to].x + 10, that.vertexPositions[node.to].y + 8);
          that.context.closePath();
          that.context.stroke();
          node = node.next;
        }
      });
      this.vertexPositions.forEach(function(vertexPosition, vertexNumber) {
        that.context.strokeStyle = '#090';
        that.context.fillStyle = '#eee';
        if (that.vertexState[vertexNumber] === 'discovered') {
          that.context.fillStyle = '#ffe';
        }
        if (that.vertexState[vertexNumber] === 'processingStarted') {
          that.context.fillStyle = '#fee';
        }
        if (that.vertexState[vertexNumber] === 'processingFinished') {
          that.context.fillStyle = '#efe';
        }
        that.context.beginPath();
        that.context.arc(vertexPosition.x + 10, vertexPosition.y + 8, 20, 0, Math.PI*2, true);
        that.context.closePath();
        that.context.stroke();
        that.context.fill();

        that.context.fillStyle = '#000';
        that.context.font = '12pt sans-serif';
        that.context.textBaseline = 'top';
        that.context.fillText(vertexNumber, vertexPosition.x, vertexPosition.y);
      });
    }
  };

  return canvasDrawer;
});
