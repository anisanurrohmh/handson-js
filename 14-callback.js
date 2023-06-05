const sayHelloAsync = cb => {
    console.log(`Log from sayHello()`);
    let name = '';
    setTimeout(() => {
        name = 'Joni';
        cb(`Hi everyone..., i am ${name}`);
    }, 1000);
}

// console.log('start----');
// sayHelloAsync(name => {
//     console.log(name)
// })
// console.log('finish');
 

/// contoh lain

function minumKopi(error, output) {
    if (error) {
        console.log(`Kecewa ${error}, karena ${output}`);
    } else {
        console.log(`Terimakasih. Sruput ${output}, ahhh`);
    }
}

function pesanMinuman(pesanan, kirimPesan) {
    console.log(`Menunggu pesanan, ${pesanan} sedang proses`);

    setTimeout(() => {
        if (pesanan === "teh") kirimPesan(`Pesanan ${pesanan} tidak ada`,'habis')
        else {
            const hasil = `Kopi ${pesanan}`
            kirimPesan(null, hasil)
        }
    }, 2000)

    console.log('silahkan ditunggu');
}

pesanMinuman("teh", minumKopi)