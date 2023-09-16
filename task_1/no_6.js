var readlineSync = require('readline-sync');

let bilanganPositif = readlineSync.question('Masukan sebuah bilangan bulat positif:');

function Faktorial(n){
    if(n === 0){
        return 1;
    }
    else {
        return n * Faktorial(n-1);
    }
}
console.log(bilanganPositif + '! = ' + Faktorial(bilanganPositif));