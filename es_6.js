// let const (create variable)

// let (1 x declare, gak boleh bikin let dengan nama yang sama)
// let nama = 'fikri'
// nama = 'budi'


// const (gak bisa di re-asign)
const kelas = 'WM'


















// arrow function




function Nama(a){
    console.log('Hello ' + a)
}

const NamaKu = (a) => {
    console.log("Hello " + a)
}

















// template string / tempate literal
// tata cara penulisan string yang baru

// var nama = 'fikri'
// var alamat = 'bandung'
// console.log('nama saya adalah ' + nama + ' , saya tinggal di ' + alamat)

// console.log(`nama saya adalah ${nama}, saya tinggal di ${alamat}`)
// var output = `<h1>${nama}</h1>`




















// default parameter


const dataKu = (nama='anonim',gaji=0) => {
    console.log(`Nama saya ${nama}, gaji saya Rp. ${gaji}`)
} 



// dataKu()











// Destructuring Objects (keluarin props array)


var data = {
    nama : 'fikri',
    alamat : 'bandung'
}

var {nama,alamat} = data


// console.log(`nama saya ${nama}, saya dari ${alamat}`)


var data2 = {
    nama : {
        depan : "fikri",
        belakang : "susilo"
    }
}

var {depan,belakang} = data2.nama


// console.log(`nama saya ${data2.nama.depan} ${data2.nama.belakang}`)
// console.log(`nama saya ${depan} ${belakang}`)
















// spread operator

// array

// let a = [1,2,3,4]
// let b = [5,6,7,8]

// console.log(a)

// console.log(...a)

// let c = [...a,...b]
// console.log(c)






















// Array methods (map, foreach, filter)
// foreach === for biasa
// map === for biasa tapi menghasilkan array baru yang udah di manipulasi
// filter === for biasa tapi menghasilkan array baru yang udah di filter


var arr = [2,3,4,5,1]
// var total = 0

// for(var i = 0 ; i < arr.length;i++){
//     total += arr[i]
// }

// arr.forEach(({},b) => {
//     total += b
// })


// console.log(total)


var newArr = arr.map((val,index) => {
    return  val * index
})


var newArr = arr.filter((val,index) => {
    return val > 3
})
console.log(newArr)

// GIT VS GITHUB

// GIT NAMA SOFTWARE (local comp)
// GITHUB KUMPULAN ORANG ORANG YANG MAKE GIT (di cloud)








