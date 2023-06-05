 

// 1. for 
for (let i = 1; i < 5; i++) {
    console.log(i)
}

// 2. while 
let angka = 0
while (angka < 5) {
    console.log(angka)
    angka++;
}

// 3. do while 
let angka1 = 0;
do {
    console.log(angka1)
    angka1++
} while (angka1 > 5)

// 4. for in
//  mengulang array dan objek, menghasilkan index pada array atau properti pada objek
const colors = ["red", "green", "blue"];
for (let idx in colors) {
    console.log(colors[idx]);
}

// const person = { name: "anisaa", age: 20 }
// for (let item of person) {
//     console.log(person[item])
// }

// 5. for of
 // menghasilkan nilai isi array
for (let color of colors) {
    console.log(color)
}
