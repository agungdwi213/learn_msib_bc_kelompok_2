var readlineSync = require('readline-sync');

let panjang = readlineSync.question('Masukan panjang alas segitiga (dalam satuan tertentu): ');
let tinggi = readlineSync.question('Masukan tinggi segitiga (dalam satuan tertentu): ');

let luas = (panjang * tinggi) * 1/2
let hipotenusa = Math.sqrt(panjang**2 + tinggi**2);
console.log('Luas segitiga siku-siku adalah: ' + luas);
console.log('Panjang sisi miring (hipotenusa) adalah: ' + hipotenusa)

