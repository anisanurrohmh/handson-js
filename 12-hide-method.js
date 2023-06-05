class Car {
    constructor(brand = 'Default Brand', name = 'Default Name', fuel = 0) {

     //   console.log('Akan di jalankan pertama kali');
        
        this.brand = brand;
        this.name = name
        var fuel = fuel;
        
        // peletakan di dalam constructor
        this.setFuel = newFuel => {
            console.log(`Set fuel from ${fuel} to ${newFuel}`);
            fuel = newFuel;
        }

        this.printInfo = () => {
            return `This ${this.brand} has a name ${this.name} and fuel ${fuel}`;
        }
    }
}

const avanza = new Car('Toyota', 'Avanza', 0);
avanza.fuel = 20; // gak akan ngaruh
//console.log('before:',avanza.printInfo())
avanza.setFuel(20);
//console.log('after:',avanza.printInfo())