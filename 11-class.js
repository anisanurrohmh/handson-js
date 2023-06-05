
// membuat class dari funcion
function Car(brand, name) {
    this.brand = brand;
    this.name = name;
    this.engineStart = function() {
        console.log(`${this.brand} ${this.name} engine started`);
    }
}

const corolla = new Car('Toyota', 'Corolla');
const terios = new Car('Daihatsu', 'Terios');

// corolla.engineStart() // Toyota Corolla engine started
// terios.engineStart() // Daihatsu Terios engine started






// sebelum class
//js dia memakai sebuah function untuk mebuat object
function Product1(id, name) {
    let product = {}
    product.productId = id;
    product.name = name;
    product.info = function () {
        return `productId${this.productId} productName ${this.name}`
    }
    return product
}
let product011 = Product1(123, 'sabun'); //disini bisa kita lihat function di create ulang setiap membuat sebuah object baru 
console.log(product011);
 
//bagaimana caranya agar info ini tidak ikut saat dipanggil? buat sebuah method terpisah untuk menampung info
const ProductMethod = {
    info : function() {
        return `productId ${this.productId} , productName ${this.name}`
    }
}
function ProductObject(id,name) {
    let product = Object.create(ProductMethod);
    product.productId = id;
    product.name = name;
    return product;
}

let product03 = ProductObject(234,'jution');
product03.productId=888 //code diatas kurang bagus karena kita harus membuat sebuah object lain untuk object yang reusable
console.log(product03)
console.log(product03.info())

function Carr(brand,name) {
    this.brand = brand;
    this.name = name;
    this.run = function() {
        console.log(`${this.brand} ${this.name} engine started`);
    }
}
const corollaa = new Carr('Toyota','Corolla');
 
 
// contoh class
 class Cars {
    constructor(brand = 'Default Brand', name = 'Default Name') {
        console.log('Akan di jalankan pertama kali');
        this.brand = brand;
        this.name = name
    }

    engineStart() { // method
        console.log(`${this.brand} ${this.name} engine started`);
    }


    static toString(car) { // static method
        return `This ${car.brand} has a name ${car.name}`;
    }
}

// const corollas = new Car('Toyota', 'Corolla');
// corollas.engineStart() // Toyota Corolla engine started
// console.log(Cars.toString(corollas))