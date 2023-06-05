import { fullName } from "./user.js";

console.log(fullName);  

export function sayHello(name) {
    return `Hello ${name}`;
}


export class Car {
    constructor(brand, name) {
        this.brand = brand;
        this.name = name;
    }
}


const enigma = 'Enigma Camp';

function sayHellow(name) {
    return `Hello ${name}`;
}

export { enigma, sayHellow };