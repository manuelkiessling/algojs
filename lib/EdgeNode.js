"use strict";
if (typeof define !== 'function') { var define = require('amdefine')(module) }

define([], function() {
  var EdgeNode = function(to, next) {
    this.to = to;
    this.next = next;
  };
  return EdgeNode;
});
