var hari = 361

var tahun = Math.floor(hari / 360) //  1
var sisa_bagi_tahun = hari % 360 // 1
var bulan = Math.floor(sisa_bagi_tahun / 30) // 0. koma
var sisa_bagi_bulan = sisa_bagi_tahun % 30 // 1
var print = hari + ' hari = ' + tahun + ' tahun, ' + bulan + ' bulan, ' + sisa_bagi_bulan + ' hari'



console.log(print)


// sifat modulus
// a % b
// jika a < b 
// a % b ==> a 