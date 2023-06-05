var set = new Set();
set.add('triangle');
set.add('triangle');
set.add('square');
 // its unique only
set.forEach(function(value) {
  console.log(value);
}); 


var array = [1, 2];
set.add(array);
 
console.log(set.has(array)); // true
// set.delete(array); 
// console.log(set.has(array)); // false
 
set.add(3);
set.add({a: 3});
 
var values = set.values();
for (var value of values) {
    console.log(value);
} 