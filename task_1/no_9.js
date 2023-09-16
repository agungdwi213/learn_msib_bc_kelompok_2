var readlineSync = require('readline-sync');

let detikawal = readlineSync.question('Masukan jumlah detik: ');
let jam = Math.floor(detikawal/3600);
let jam2 = detikawal % 3600;
let menit = Math.floor(jam2/60);
let menit2 = jam2 % 60;
let detik = menit2 % 60;


console.log(`Waktu dalam format jam:menit:detik = ${jam}:${menit}:${detik}`)
