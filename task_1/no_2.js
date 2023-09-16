var readlineSync = require('readline-sync');

var suhu = readlineSync.question('Masukan suhu dalam celcius: ');
const Hasil = (suhu * 9/5) + 32

console.log('Suhu dalam fahrenheit: '+ Hasil)