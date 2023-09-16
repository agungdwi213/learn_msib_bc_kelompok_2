var readlineSync = require('readline-sync');

const angkaAcak1 = Math.floor(Math.random() * 10 + 1);
const angkaAcak2 = Math.floor(Math.random() * 10 + 1);

console.log('Angka pertama = ' + angkaAcak1);
console.log('Angka kedua = ' + angkaAcak2);

let pertanyaan = readlineSync.question(`berapa hasil dari ${angkaAcak1} + ${angkaAcak2}? `);

const Hasil = angkaAcak1 + angkaAcak2

if(Hasil == pertanyaan){
    console.log('Selamat jawaban anda benar!');
} 
else {console.log(`Maaf, jawaban anda salah. Jawaban yang benar adalah ${Hasil}.`)
}
