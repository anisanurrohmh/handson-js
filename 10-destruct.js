//desrtructuring , mengubah property objek menjadi variabel sendiri


// 1. Destructuring pada object
let person = {
    name: "person",
    age: 20,
    gender: "male",
    address: "Ragunan",
    hobi: "baca buku"
}

// Tanpa menggunakan destructuring
// let age = person.age;
// let name = person.name;
 
// Menggunakan destructuring
let { name, age, gender } = person;

const car = {
    name: 'bmw',
    color: 'white',
    seats: {
        count: 4,
        type: 'leather'
    },
    engine: '1500cc'
}

//const { name, color } = car; 
    // Contoh destruct nested object
// const { name, color, seats: { count, type } } = car;
// console.log(name,count, type); // 4 leather