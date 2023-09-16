var readlineSync = require('readline-sync');

let angka1 = readlineSync.question('Masukan angka pertama: ');
let angka2 = readlineSync.question('Masukan angka kedua: ');

let Hasil_Pertambahan = Number(angka1) + Number(angka2);
let Hasil_Pengurangan = angka1 - angka2;
let Hasil_Pembagian = angka1 / angka2;
let Hasil_Perkalian = angka1 * angka2;

console.log(`Hasil dari ${angka1} + ${angka2} = ${Hasil_Pertambahan}`);
console.log(`Hasil dari ${angka1} - ${angka2} = ${Hasil_Pengurangan}`);
console.log(`Hasil dari ${angka1} / ${angka2} = ${Hasil_Pembagian}`);
console.log(`Hasil dari ${angka1} x ${angka2} = ${Hasil_Perkalian}`);