
// dialam js kita membuat var tanpa mendeklarasikan tipe data nya, melainnkan langsung mengikuti sesuai data yang di assign didalam variabel.

// 1. undefined
let var1 = undefined;

// 2. boolean
let var2 = false; 

// 3. number
let theInt = 1234567890123456789012345678901234567890;
let var3 = 10.5;

// ketika keluar dari cakupan nilai, akan menimpulkan bug
const nval1 = 9007199254740991 + 1
const nval2 = 9007199254740991 + 2
// console.log("====", nval1 == nval2); // false

// 4. bigint
const bval2 =  9007199254740991n + 2n
// console.log("+++++", bval1 == bval2);  // true

// 5. string
// var name="anisa";
// let name='anisa';
 
// 6. null

// 7. object
let var9 = {
    firstName: "anisa",
    lastName: "nur rohkmah",
    "tempat tanggal lahir": "natar, 2000-01-01"
}

// 8. symbol
const simbol1 = Symbol("hello");
 
let obj = {};

function lib1tag(obj)
 { obj.id = 42; }

function lib2tag(obj) 
{ obj.id = 369; }
lib1tag(obj)
lib2tag(obj)

// obj akan berisi id dari fungsi yang terahir dipanggil
console.log(obj) // { id: 369 }

// dengan menggunakan simbol kita dapat menambah properti dengan key yang sama, tapi keduanya unik
function lib1tag(obj) {
    let lib1tagId = Symbol("id");
    obj[lib1tagId] = 42;
}
function lib2tag(obj) {
    let lib2tagId = Symbol("id");
    obj[lib2tagId] = 369;
}
// lib1tag(obj)
// lib2tag(obj)
// obj akan berisi 2 id dari masing2 fungsi
console.log(obj) // { id: 42, id: 369 }


/*
Array 
 */

let days = ["Senin", "Selasa", "Rabu"] 
let arr = [1, undefined, null, "nisa", days];


// .push("nilai") -> untuk menambah data ke paling akhir
// .pop() -> untuk menghapus data di paling akhir
// .shift() -> untuk menghapus data di paling awal
// .unshift("nilai") -> untuk menambah data ke paling awal
// slice(1, 3) -> untuk mengambil data array pada index ke 1 sampai index ke 3
// splice(1, 3) -> untuk menghapus data array dari index ke 1 sampai 3 data selanjutnya
// etc
