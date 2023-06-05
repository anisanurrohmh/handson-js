function showName(name, func) {
    if (typeof func === 'function') {
        name = func.call(this, name)
    }
    return name
}

// Buat contoh sebuah function misalnya untuk uppercase
function toUpper(name) {
    return name.toUpperCase()
}
// Memanggil showName bisa dua cara
// 1. Pertama memanggil dengan function sebagai argumen
console.log(showName('bulan', toUpper));
// 2. Tanpa argumen function
console.log(showName('bintang'));

// Atau jika tidak mau dibuat terlebih dahulu bisa seperti ini
const result = showName('Jamal', function (name) {
    return name.toUpperCase();
})
console.log(result);
// Beritahukan trainee, untuk lebih jelas nanti di TOPIC: Callback