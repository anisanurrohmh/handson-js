 
let map = new Map();


var obj = { x: 1 };
var obj2 = { x: 2 };
 
// map.set(obj, obj2);
// map.set(0, obj2);
 
// console.log(map.has(obj)); // true // membandingkan 
// console.log(map.has(0)); // true // membandingkan 
// console.log(map.get(obj)); // { x: 2 }
// console.log(map.get(0)); // { x: 2 }
// console.log(map.get(1)); // undefined
 
// map.delete(obj);
// console.log(map.has(obj)); // false
 
map.set(1,'jeruk')
map.set(2,'alpukat')
map.set(2,'anggur')
map.set(3,'melon')
// console.log(map.get(2))

map.delete(3)

for (var k of map) {
    console.log(k);
} 
for (var [a,b] of map) {  // urut, key, baru value, atau hanya value saja
    console.log(b + ' : '+a);
}  
map.forEach((n,m )=>console.log(m+ ','+n))  // value, baru key


map.clear();

