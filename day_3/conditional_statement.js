// Conditional Statement / Pengkondisian

// **************
// Assignment Operator 
// masukin suatu data ke variabel (wadah)
 
var nama;
nama = 'Fikri'

nama += 'Seto' // nama = nama + seto

var angka = 10
angka += 20 // angka = angka + 20 // 30
angka *= 2 // angka = angka * 2 // 60

// console.log(angka)


// ****************
// Comparison Operator
// comparison operator itu menghasilkan boolean
var angka_1 = 10
var angka_2 = "10"

// console.log(angka_1 == angka_2)
// console.log(angka_1 > angka_2)
// console.log(angka_1 >= angka_2)
// console.log(angka_1 === angka_2)


// ****************
// Logical Operator
// digunakan untuk mengkompare lebih dari dua kondisi
// && (and) , || (or) , ! (not)
// rules = 
    // && => salah satu kondisi false, maka hasil akhir akan false
    // && => dua kondisi harus true, jika hasil akhir ingin true

    // || => salah satu kondisi true, hasil akhir akan true
    // || => dua kondisi harus false, jika hasil akhir ingin false

    // ! => kebalikan dari hasil

    var beratBadan = 80

    // console.log(beratBadan != 0) // true
    // console.log(beratBadan === 0) // false
    // console.log(beratBadan === 0 || beratBadan == 90) // false
    // console.log(beratBadan === 0 || beratBadan > 0) // true
    // console.log(beratBadan === 0 && beratBadan > 0) // false
    // console.log(beratBadan > 10 && beratBadan > 0) // true


// ***********
// Conditional Statement

// if(condition){action}
// else if(condition_2){action_2}
// else {action_default}

// rules =>
    // condition true ==> action jalan
    // jika semua kondision bernilai false ==> action_default jalan

// kadang kita pengin ngelakuin sesuatu pada kondisi tertentu

// var nilai = 90

// if(nilai < 70){ // false
//     console.log('Nilaimu Remed')
// }else if(nilai >= 70 && nilai < 90){ //  true && false == false
//     console.log('nilaimu bagus')
// }else{
//     console.log('nilaimu bagus bangett')
// }


// var nilai = 40
// // ketika salah satu kondisi true, kondisi else if lainnya gak bakal di cek
// if(nilai < 70){  // true
//     console.log('Nilaimu Remed')
// }else if(nilai <= 70 && nilai < 90){  // true && true ==> true
//     console.log('nilaimu bagus')
// }else if(nilai == 40){
//     console.log('nilaimu 40')
// }else if(nilai == 50){
//     console.log('nilaimu 50')
// }else{
//     console.log('nilaimu bagus bangett')
// }


// var nilai = 40
// // Semua kondisi bakalan di cek
// if(nilai < 70){  // true
//     console.log('Nilaimu Remed')
// }
// if(nilai <= 70 && nilai < 90){
//     console.log('nilaimu bagus')
// }
// if(nilai == 40){
//     console.log('nilaimu 40')
// }
// if(nilai == 50){
//     console.log('nilaimu 50')
// }



// Nested Condition
// if di dalam if

var angka = -9

if(angka > 0){
    if(angka > 10){
        console.log('nilai besar')
    }else{
        console.log('nilai kecil')
    }
}else{
    console.log('angka minus')
}











