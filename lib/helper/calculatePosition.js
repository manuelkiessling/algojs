"use strict";
if (typeof define !== 'function') { var define = require('amdefine')(module) }

/**
 * Helper function used to calculate the pixel position of a graph vertex
 * (identified by its numerical id, starting at 1) on a 2D plane
 */

define([], function() {
  var calculatePosition = function(id, options) {
    var position = {};
    var rowsize = options.width / options.rows;
    var colsize = options.height / options.columns;
    position.x = ((id - 1) % options.rows) * rowsize;
    position.y = Math.floor((id - 1) / options.columns) * colsize;
    return position;
  };
  return calculatePosition;
});
