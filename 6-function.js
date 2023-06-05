
// 1. reguler / declaration function ===> hoisting berlkau

function sayHello(name) {
    return "Hello " + name;
}

const hello = sayHello('Anisa');
console.log(hello);  

   
// const cetakNama = (params) => {
//     if (typeof params === "string") {
//         console.log(`Hello ${params}`)
//     } else if (typeof params === "function") {
//         params()
//     }
// }
// cetakNama("EnigmaCamp");

// 2. anonymous function / tanpa nama

    (params) => {
        if (typeof params === "string") {
            console.log(`Hello ${params}`)
        } else if (typeof params === "function") {
            params()
        }
    }

// 3. expression function
// Fungsi ekspresi adalah berisi fungsi anonim (tanpa nama). Setelah membuat fungsi tanpa nama, lalu kami menetapkannya ke variabel.
const functionNameExpression = function () {
    // kode disini
}
functionNameExpression();

// Fungsi anonim juga biasa dibuat untuk callback sebagai parameter pada function
cetakNama(function() {
    console.log("Hello")
});




// 4. arrow function
// jika sebaris maka otomatis mereturn nilai tanpa perlu menambah keyword return
const functionNameArrow1 = () => {
    return "Return nilai"
};
const functionNameArrow2 = () => "Langsung me-return nilai";
functionNameArrow1();



// 5. IIFE (Intermediate invoke function expression) function
// fungsi dibuat dan langsung dijalankan (hanya sekali pakai)
// bisa dibuat dengan anonim atau arrow function
(() => console.log("iife function"))();

(function (name) { console.log("iife function", name) })("nama");
