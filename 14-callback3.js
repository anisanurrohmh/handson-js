function minumKopi(error, output) {
    if (error) {
        console.log(`Kecewa ${error}`);
    } else {
        console.log(`Terimakasih. Sruput ${output}, ahhh`);
    }
}

function pesanMinuman(pesanan, kirimPesan) {
    console.log(`Menunggu pesanan, ${pesanan} sedang proses`);
    setTimeout(() => {
        if (pesanan === "teh") kirimPesan(`Pesanan ${pesanan} tidak ada`)
        else {
            setTimeout(() => {
                console.log("Pesanan sedang dibuat");
                const hasil = `Kopi ${pesanan}`
                kirimPesan(null, hasil)
            }, 3000)
        }
    }, 2000)
}

pesanMinuman("Americano", minumKopi)