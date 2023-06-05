
// 1. Aritmatika 

let mod = 7 % 7;
console.log(mod);

let exp = 7 ** 7;
console.log(exp);

let mul = 7 * 7;
console.log(mul);

let div = 7 / 7;
console.log(div);


// operator + bisa digunakan untuk melakukan penggabungan teks
let firsName = "Anisa";
let lastName = "NR";
console.log(firsName + " " + lastName);

// ketika menggabungkan string dan number maka semuanya akan dianggap sebagai string
let numbera = "1000";
let numbers = 1; // auto casting ke string
console.log(numbera + number2); // 10001

 
// let number1 = "1000";
// let number2 = 1; // auto casting ke number
// console.log(number1 - number2);

// let number4 = 1000; // auto casting ke number
// let number7 = "1";
// console.log(number4 - number7);


// 2. Assignment
// digunakan untuk memberikan tugas kepada variabel

// mengisi nilai pada variabel
let fullname = "Anisa Nur Rohkmah";

let number10 = 10;
 
// mengisi nilai dan lakukan penambahan pada variabel
number10 += 10;
console.log(number10);

number10 = number10 - 10;
// mengisi nilai dan lakukan pengurangan pada variabel
number10 -= 10;
console.log(number10);

number10 = number10 / 10;
// mengisi nilai dan lakukan pembagian pada variabel
number10 /= 10;
console.log(number10)

number10 = number10 * 10;
// mengisi nilai dan lakukan perkalian pada variabel
number10 *= 10;

number10 = number10 ** 10;
// mengisi nilai dan lakukan perpangkatan pada variabel
number10 **= 10;

number10 = number10 % 10;
// mengisi nilai dan lakukan modulus pada variabel
number10 %= 10;


// 3. Perbandingan
// digunakan untuk membandingkan dua nilai

let boolean1 = 10 == "10"; // nilai sama dengan
let boolean2 = 10 === "10"; // nilai dan tipe data sama dengan

let boolean3 = 7 < 10; // lebih kecil dari
let boolean4 = 7 > 10; // lebih besar dari
let boolean5 = 7 != "7"; // nilai tidak sama dengan
let boolean6 = 7 !== "7"; // nilai dan tipe data tidak sama dengan
let boolean7 = 7 <= "10"; // lebih kecil dari sama dengan
let boolean8 = 7 >= 10; // lebih besar dari sama dengan

// 4. Logika
// digunakan untuk melakukan operasi terhadap nilai boolean

console.log("AND", false && false);
console.log("OR", false || false);
console.log("Negasi", !false);

// 7. Bitwise
// operator yang digunakan untuk operasi berdasarkan bit (biner)
let a = 0
let b = 1

// & AND
console.log(a & b);

// | OR
console.log(a | b);

// ^ XOR
console.log(a ^ b);

// ~ NEGASI
console.log(~a);

// 6. Ternary 
// <kondisi> ? "benar" : "salah"
let result = 10 % 2 === 0 ? "Genap" : "Ganjil"
