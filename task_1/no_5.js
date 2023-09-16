var readlineSync = require('readline-sync');
const awal = 1
let range = readlineSync.question('Masukan angka range: ')

var jumlah = 0;

for (var i = awal; i <= range; i++) {
  if (i % 2 !== 0) {
    jumlah += i; 
  }
}

console.log("Jumlah bilangan ganjil dari 1 hingga " + range + ": " + jumlah);

