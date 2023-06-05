var s = 'enigmacamp';
var s0 = s.slice(0); // enigmacamp
var s1 = s.slice(1); // nigmacamp
var s3 = s.slice(2); // igmacamp
var s2 = s.slice(2, 4); // ig
var s6 = s.slice(-1); // p
var s4 = s.slice(-2); // mp
var s5 = s.slice(2, 4); // ig
 
console.log(s0)
console.log(s1)
console.log(s3)
console.log(s2)
console.log(s6)
console.log(s4)
console.log(s5)

let a = (n) => {
   // return n>2 ? n * a (n-1) : 2 
    return n>2 ? n * a(n-1)  : 2 
}
console.log(a(6))

let hasil =    2 * 3 ** 3 - 1 // 53 // 36 // 215 // 2 
console.log(hasil)


let hitung = (n) => {
 return  n * 3 > 10 ? 4 * 2 ** 3 - 1 : 2
}
//console.log(hitung(5))


let hitung2 = (n) => {
    return   4 ** 2 - n > 5 ? 4 * 2 ** 3 - 1 : 2
   }
   console.log(hitung2(5))


31
64
6
32









// 5 
// 


let limit = 5 
// let interval = setInterval(()=> {
//     console.log(limit)
//     if(limit-- <=0) clearInterval(interval)
// }, 2000);




// console.log(5+2**2*3)