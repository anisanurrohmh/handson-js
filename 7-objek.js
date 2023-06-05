// berisi kumpulan data key value/ properti 
const student = {
    firsName: 'Joko',  
    address : {
        street: 'Jl. H Dahlan No 75',
        districts: 'Pasar Minggu',
    },
//    isGraduate: false,
    getInfo() {  //dapat berisi function
        const job = this.isGraduate ? 'Programmer' : 'Waiting Graduate';
        console.log(`${this.firsName} is in status ${job}`);
    },
    sayHello2: () => { console.log(`Hello `);
    }
}

// kita dapat mengubah isi nilai objek, tapi tidak bisa menginisialisasi kan ulang objek
student.address = 'Menteng'
// student = {  // ini akan error
//     address : 'ragunan',
// }
// create objek
const bulan = Object.create(student);
bulan.isGraduate = true;
bulan.getInfo();

const studentKeys = Object.keys(student); // mengambil semua key pada objek :  [ 'id', 'name', 'major', 'isGraduate', 'address', 'getInfo' ]
const studentKeyLength = Object.keys(student).length; // mengambil panjang key yg ada // 4

const studentValue = Object.values(student); // mengambil semua value
console.log(studentValue);


