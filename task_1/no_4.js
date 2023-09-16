var readlineSync = require('readline-sync');

let pertama = readlineSync.question('Masukan angka pertama: ');
let kedua = readlineSync.question('Masukan angka kedua: ');


if (Number(pertama) > Number(kedua)) {
    console.log(pertama +" Lebih besar dari " + kedua);
  } else if (Number(kedua) > Number(pertama)) {
    console.log(kedua + " Lebih besar dari " + pertama);
  } else {
    console.log("Angka-angka tersebut sama besar");
  }
  