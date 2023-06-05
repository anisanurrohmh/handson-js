// let sX = prompt("Enter the first number");
// let sY = prompt("Enter the second number");
// let x = Number(sX);
// let y = Number(sY);

// if(Number.isFinite(x) && Number.isFinite(y) && y !== 0)
// {
//       console.log(x/y);
// }
// else {
//     console.log("incorrect ")
// }

// let a = -2;

// try {
//     a = b;
// }
// catch (error) {
//     if (error instanceof ReferenceError) {
//         console.log("Reference error, reset a to -2"); // -> Reference error, reset a to -2
//         a = -2;
//     } else {
//         console.log("Other error - " + error);
//     }
// }
// console.log(a); // -> -2



// Function factorial(n) {
//     if (n > 20) {
//         throw new RangeError("Max value 20");
//     }
//     let result = 1;
//     for (; n > 1; n--) {
//         result = result * n;
//     }
//     return result;
// }

// console.log(factorial(20)); // -> 2432902008176640000
// console.log(factorial(1000)); // -> Uncaught RangeError: Max value 20


let x = 10

function test(){
    let x=22
    console.log(x)
}
test()

function tex(counter){ //1
    console.log("tex")
    if(counter>0) 
    tex(--counter)
}
tex(3)
 
// let xz dora
// console.log(xz)

let f = true && 20
let g = 0 && 20
let h = 3e-3
let height = ['a','b']


console.log(0x100)
console.log(20+ +"10")
console.log("10"-"10"+"100")
console.log(false || "false")

console.log('slice')
let msg = 'pelangi'
console.log(msg.slice(2))
console.log(true && 20)
console.log(true && "false")

let a = (n) => {
     return n>2 ? n* a(n-1) : 2 
}

let cmp = (a,b) => a - b
console.log(a(6));
let angka = [2,4,5,3]
console.log(angka.sort(cmp))

try{
    console.log('star')
    throw('tes')
}
catch(error){
    console.log(error)
}
console.log(12 && 5)