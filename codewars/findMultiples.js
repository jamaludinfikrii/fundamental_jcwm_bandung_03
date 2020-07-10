function findMultiples(integer, limit) {
    var hasil = [] // [3,6,9]

    var start = integer // 3 || 6 || 9 || 12
    while(start <= limit){
        hasil.push(start)
        start += integer
    }

    return hasil
    //your code here
}


// console.log( findMultiples(3,10) ) // [3,6,9]
// console.log( findMultiples(2,20) ) 






function fourChar(a){
    if(a.length == 4){
        return 'benar'
    }else{
        return 'salah'
    }
}
  



console.log(fourChar('fikr')) // 'salah'

function parkirCalculator(jamMasuk, jamKeluar){

}



parkirCalculator(6,8) // total parkir 2 jam anda harus bayar Rp. 2000