function pesanMinuman(pesanan, kirimPesan) {
    console.log(`Menunggu pesanan, ${pesanan} sedang proses`);
    setTimeout(() => {
        if (pesanan === "teh") kirimPesan(`Pesanan ${pesanan} tidak ada`)
        else {
            const hasil = `Kopi ${pesanan}`
            kirimPesan(null, hasil)
        }
    }, 2000)
}

function minumKopi(reject, resolve) {
    return (error, output) => {
        if (error)
            reject(`Kecewa ${error}`);
        else
            resolve(`Terimakasih. Sruput ${output}, ahhh`);
    };
}

function pesanMinumanAsync(pesanan) {
    return new Promise((resolve, reject) => {
        pesanMinuman(pesanan, minumKopi(reject, resolve))
    });
}

pesanMinumanAsync('americano')
    .then(output => console.log(output))
    .catch(error => console.log(error))
    
// ////// with assync awai

function orderKopi() {
    const order = pesanMinumanAsync('americano');
    console.log(order);
}

orderKopi();
const order = await pesanMinumanAsync('americano');

async function orderKopi() {
    const order = await pesanMinumanAsync('americano');
    console.log(order);
}

orderKopi();