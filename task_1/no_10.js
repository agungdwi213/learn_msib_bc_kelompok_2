var CryptoJS = require('crypto-js');
var readlineSync = require('readline-sync');

let kata = readlineSync.question('Masukan sebuah kata: ');
let kunci = readlineSync.question('Masukan kunci rahasia: ');

var ciphertext = CryptoJS.AES.encrypt(kata, kunci).toString();

console.log('Ciphertext: ' + ciphertext);

let kunciPembuka = readlineSync.question('Masukan kembali kunci rahasia: ');

var bytes = CryptoJS.AES.decrypt(ciphertext, kunciPembuka);
var originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log('Plaintext: ' + originalText);


