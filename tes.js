// // let fruits = new Map();
// // fruits.set(1,'jeruk')
// // fruits.set(2,'alpukat')
// // fruits.set(2,'anggur')
// // fruits.set(3,'melon')  
// // let result2 = []
// // let result1 = []
// // for (var x of fruits) {  // urut, key, baru value, atau hanya value saja  // console.log(x);
// //     result1.push(x)
// // }  
// // fruits.forEach((a,b )=> result2.push(b))  // value, baru key
 
// // // console.log(result1)
// // console.log(result2)



// var obj = {
//     meth: function() {
//         var that = this;
//         func();
         
//         function func()
//         {
//             console.log(obj === this); // false
//             console.log(obj === that); // true
//         }
         
//     }
// };

// let objeks = { a: 1, b: 2, c: 3 };
// for (let kecy in objeks) {
//   console.log(kecy + ': ' + objeks[kecy] + objeks[kecy]);
// }

//    objeks = [1,2,3,4]
// // for (let prop of objeks) {
// //   console.log(prop );
// // }
// // Output: a: 1, b: 2, c: 3


// function add(x, y) {
//     var result = 0;
//     if (arguments.length == 2) {
//         result = x + y;
//     } else {
//         for (let i = 0; i < arguments.length; i++) {
//             result = result + arguments[i];
//         }
//     }
//     return result;
// }
 
// var result = add(3, 5); // 8
// var result2 = add(3, 5, 6); //14 


// var result;
// var width = 5;
// var length = 7
  
// function calculateArea() {
//     var length = 10;
//     var area = width * length;
//     return area;
// }
  
// result = calculateArea();
  
// console.log(width); // 5
// console.log(length); // undefined
// console.log(result); // 50


// function test(counter) {
//     console.log("test");
//     if (counter > 0)
//         test(--counter);
// }
 
// test(3);


let counter = 100;
console.log(counter); // -> 100
{
   counter = 200;
   console.log(counter); // -> 200
}
console.log(counter); // -> 200

// let counter = 100;
// console.log(counter); // -> 100
// {
//   let counter = 200;
//   console.log(counter); // -> 200
// }
// console.log(counter); // -> 100
let test1 = "100" - "10";
console.log(test1); // -> 
let test = 100 + 10;
console.log( (100/10)); //


let heigh = 9
{
    let heigh = 10
}
// console.log(20n +10)

let x = 'abcdefg'.slice(2,4)
console.log(x)

let summer = ['jun', 'jjul']
summer[1] = 9
console.log(summer)

var s = 'abcdefg';
var s2 = s.slice(2, 4); // cd
var s3 = s.slice(2); // cdefghi
var s4 = s.slice(-2); // hi
var s5 = s.slice(2, 4); // cde

console.log(s)
console.log(s2)
console.log(s3)
console.log(s4)
console.log(s5)


let nr = 0;
let year = 1970;
let name = "Alice";
let empty = "";

console.log(!nr); // -> true
console.log(!year); // -> false
console.log(!name); // -> false
console.log(!empty); // -> true

console.log(!!nr); // -> false
console.log(!!name); // -> true

console.log(true && 1991); // -> 1991
console.log(false && 1991); // -> false
console.log(2 && 5); // -> 5
console.log(0 && 5); // -> 0
console.log("Alice" && "Bob"); // -> Bob
console.log("" && "Bob"); // -> empty string


console.log(true || 1991); // -> true
console.log(false || 1991); // -> 1991
console.log(2 || 5); // -> 2
console.log(0 || 5); // -> 5
console.log("Alice" || "Bob"); // -> Alice
console.log("" || "Bob"); // -> Bob

console.log("b" > "a"); // -> true
console.log("a" > "B"); // -> true
console.log("B" > "A"); // -> true
console.log("A" > "4"); // -> true
console.log("4" > "1"); // -> true

console.log("ab1" < "ab4"); // -> true
console.log("ab4" < "abA"); // -> true
console.log("abB" < "aba"); // -> true
console.log("aba" < "abb"); // -> true

console.log("ab" < "ab4"); // -> true
