// //prototype
// function ProductPrototype(id,name) {
//     let product = Object.create(ProductPrototype.prototype)
//     product.productId = id;
//     product.name = name;
//     return product;
// }
// ProductPrototype.prototype.info = function() {
//     return `productId ${this.productId} productName ${this.name}`
// }
// let product05 = ProductPrototype(233,'sikat gigi');
// console.log(product05.info());


// //constructor di function
// function NewProduct(id,name) {
//     this.productId = id;
//     this.productName = name;
// }

// NewProduct.prototype.info = function() {
//     return `productId ${this.productId} productName ${this.productName}`
// }

// let product06 = new NewProduct(999,'parfum');
// console.log(product06.info());
 

const sayHelloAsync = cb => {
    console.log(`Log from sayHello()`);
  
    let name = '';
  
    setTimeout(() => {
        name = 'Joni';
        cb(`Hi everyone..., i am ${name}`);
    }, 1000);

    
}

console.log('start----');
sayHelloAsync(name => {
    console.log(name)
})
console.log('finish');

 