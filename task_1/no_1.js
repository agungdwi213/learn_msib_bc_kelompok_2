var readlineSync = require('readline-sync');

var angka_pertama = readlineSync.question('Masukan Angka pertama: ');
var angka_kedua = readlineSync.question('Masukan Angka kedua: ');
const Hasil = angka_pertama * angka_kedua

console.log('Hasil perkalian: '+ Hasil)