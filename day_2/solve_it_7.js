//  hitung karakter

var karakter = 'purwadhika code'
var panjangKarakterSatu = karakter.length

karakter = karakter.replace(/a/g, '')
var panjangKarakterDua = karakter.length

console.log('Jumlah huruf "A", ada sebanyak = ' + (panjangKarakterSatu - panjangKarakterDua))


// karakter.length = 10
// buang semua huruf a ==> karakter = 'hlo duni'
// karakter.length = 8
// huruf a = karakter1.length - karakter2.length