// *************
// Variable -- tempat buat nyimpen data (punya nama)
// Cuma bisa nyimpen 1 data
// Proses Declaration & Assignment (proses bikin wadah, dan proses isi wadah)

var nama_mobil; // declaration
nama_mobil = 'Avanza' //Assignment

var nama_hewan = 'Tikus' // declaration & Assignment sekaligus
nama_hewan = 'Kucing'

var nama_orang = "Fikri"
var nama_orang = "budi"
nama_orang = 'Seto'

// console.log(nama_orang)
// console.log(nama_mobil)
// console.log(nama_hewan)



// ***********
// Comment
// buat komunikasi antar programmer
// diabaikan oleh mesin
// pake control + / atau cmnd + /




// ***********
// Prompt & Alert
// Document.write
// buat nampilin data selain pake console.log
// cuma jalan di interpreter browser
// file extension .html


// ***********
// Data Types (String , Number , Boolean , Undefined)
// tiap tipe data, itu punya behaviournya masing masing 
// tiap tide data, punya method nya masing masing (method == senjata)

// console.log(5 + 10)
// console.log("5" + "10")


// string
var data_string = "Fikri"
data_string = "fikri123"
data_string = "123123"
var tipe = typeof(data_string)

// console.log(data_string)
// console.log(tipe)


// number
var data_number = 123123
// console.log(data_number)
var tipe = typeof(data_number)
// console.log(tipe)


// boolean ==> true or false
var data_boolean = true 
// console.log(data_boolean)
var tipe = typeof(data_boolean)
// console.log(tipe)

// undefined
var data_undefined;
// console.log(data_undefined)



// **********
// STRING
// penjumlahan (digabungin bukan di tambah)
// tiap tipe data, itu punya behaviournya masing masing 
// tiap tide data, punya method nya masing masing (method == senjata)


var nama_depan = 'Fikri '
var alamat = 'jl. titiran 02'
var nomor_1 = '20'
var nomor_2 = '40'

// console.log(nama_depan + alamat)
// console.log(nomor_1 + nomor_2)
// console.log(nama_depan - alamat)  // NaN (Not a Number )

// Methods
var data_caption = 'belajar bahasa pemrograman javascript'
// console.log(data_caption.length)
// console.log(data_caption.slice(0,3))




// **********
// NUMBER
// bisa menggunakan semua operasi aritmatika (+ , - , / , *)
// modulus = sisa bagi (%)
var angka_1 = 100
var angka_2 = 200

// console.log(angka_1 + angka_2)
// console.log(angka_1 * angka_2)
// console.log(angka_1 - angka_2)
// console.log(angka_1 / angka_2)

// console.log(10 % 2) // 0
// console.log(10 % 3) // 1
// console.log(10 % 4) // 2
// console.log(15 % 2) // 1

// Method
// convert number ke string

// (problem) disuruh bikin program buat ambil 3 nomor pertama
// (alur) ==> kita ubah number menjadi string, kita ambil 3 string pertama pake slice

// var data_nomor = 8123746852

// var data_nomor_string = data_nomor.toString()
// console.log(data_nomor_string)
// var tiga_nomor_pertama = data_nomor_string.slice(0,3)
// console.log(tiga_nomor_pertama)


// ************
// Math Object
// digunakan untuk memanipulasi Number / Senjata tambahan

var angka = 4.5
var hasil_pembulatan = Math.round(angka)
console.log(hasil_pembulatan)



// ************
// Date Object (tanggal)

var d = new Date()
console.log(d)


console.log(d.getFullYear())
console.log(d.getMonth())
console.log(d.getDate())
console.log(d.getHours())







































// Basic Math Object
// Basic Date Object