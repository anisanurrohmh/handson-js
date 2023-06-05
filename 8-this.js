
const foo = { // objek biasa
   name : 'foo',
    hoby : 'cooking'
}

function getInfo(){ 
    console.log(`the ${this.name} is hoby ${this.hoby}`)
    console.log(this)
}

 //getInfo.apply(foo)



// function getInfoAddress(address) {
//     console.log(`The ${this.name} have a name ${this.hoby} live in ${address}`);
// }
// getInfoAddress.call(foo, 'Ragunan');





// contoh bin

const student = {
    name: 'Bulan',
    isGraduate: false,
    address: {
      city: 'Dewata',
    }
  }
 
  // function getInfo2(address) {
  //   const job = this.isGraduate ? 'Programmer' : 'Waiting Graduate';
  //   console.log(`${this.name} is in status ${job}`);
  //   console.log(this.address);
  //   console.log(this.address.city);
  //   console.log(`My address is ${address.city}`); // error
  // } 
  // // kita harus menggunakan method bawaan nya dahulu bisa menggunakan 'call' atau 'apply'
  // getInfo2.call(student, student.address);
  // getInfo2.apply(student, [student.address]); // cara kirim argumen menggunakan apply harus []




  //binding , akan mengembalikan function
  const info = getInfo.bind(student); // return function baru
  info();

// atau bisa seperti ini one line
getInfo.bind(foo)(); 

getInfo.bind(student)(student.address);
getInfo.bind(student)([student.address]);



