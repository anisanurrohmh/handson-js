const car = {
    name: 'honda'
}

const newCar = car;
newCar.name = 'BMW'; //pass by reference , sehingga akan keubah juga sumbernya. maka dapa dilakukan dengan cara :
 

// Bad, dengan menggunakan object.assign
const newCar1 = Object.assign({}, car);
newCar1.name = 'BMWX';

//good, dengan spread
 const newCar2 = { ...car };
newCar2.name = 'BMWZ';



// kekurangan menggunakan spread
const carr = {
    name: 'terrios',
    color: 'white',
    seats: {
        count: 4,
        type: 'leather'
    }
}

const newCarr = { ...carr }; // ini masih akan mengubah 
newCarr.seats.type = 'wood'; // ini masih akan mengubah 
  
const newCar3 = { ...carr, seats: { ...carr.seats } }; //solusi nya 
newCar3.seats.type = 'woody';

console.log('car', carr);
console.log('newCar', newCar3);
 