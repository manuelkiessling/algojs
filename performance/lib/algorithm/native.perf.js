var numItems = 1000000;
var items = [];
for (var i = 0; i < numItems; i++) {
  items.push(Math.floor(Math.random() * numItems));
}

var start = new Date().getTime();
items.sort();
var end = new Date().getTime();
var time = end - start;
console.log(numItems + " items sorted");
console.log(time / 1000 + " seconds");
console.log((numItems / time) * 1000 + " items / second");
