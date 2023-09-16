var readlineSync = require('readline-sync');

let item_1 = readlineSync.question('Masukan harga item pertama: ');
let item_2 = readlineSync.question('Masukan harga item kedua: ');
let item_3 = readlineSync.question('Masukan harga item ketiga: ');

function hasil() {
    return Number(item_1) + Number(item_2) + Number(item_3);
}

console.log('Total harga belanjaan: ' + hasil());