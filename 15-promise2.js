const stock = {
    coffeeBean: 100,
    water: 1000
}

function pesanKopi(pesanan) {
    console.log(`Memesan kopi ${pesanan}..`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (pesanan === 'teh') reject(`pesanan ${pesanan} tidak tersedia`);
            else {
                const hasil = `Kopi ${pesanan} sedang diproses..`;
                resolve(hasil);
            }
        }, 1500);
    })
}

function cekStok() {
    console.log('Cek stok..');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (stock.coffeeBean > 0 && stock.water > 0) {
                resolve('stok kopi tersedia')
            } else {
                reject('stok kopi tidak tersedia')
            }
        }, 1500);
    });
}

function seduhKopi(pesanan) {
    console.log('Membuatkan kopi', pesanan);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Kopi ${pesanan} telah siap`);
        }, 3000)
    })
}

function pesanMinuman(pesanan) {
    pesanKopi(pesanan)
        .then(result => {
            console.log(result);
            return cekStok();
        })
        .then(result => {
            console.log(result);
            return seduhKopi(pesanan);
        })
        .then(result => {
            console.log(result);
        })
        .catch(error => console.error(error));
}

pesanMinuman('teh');