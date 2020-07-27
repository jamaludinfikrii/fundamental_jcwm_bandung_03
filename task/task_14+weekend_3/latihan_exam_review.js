function sumOdd(angka) {
    // angka = String(angka)
    // var total = 0
    // for(var i = 0 ; i < angka.length; i+=2){
    //     total += Number(angka[i])
    // }
    // console.log(total)

    angka = String(angka)
    var total = 0
    var i = 0
    while(i < angka.length){
        total += Number(angka[i])
        i+=2
    }

    console.log(total)


}

// sumOdd(1234567)


function findUniqChar(sentence){
    // hapus space
    // sentence = sentence.replace(/ /g,'')
    sentence = sentence.split(' ').join('')

    // itung tiap tiap char muncul berapa kali,
    var obj = {}
    for(var i = 0 ; i < sentence.length ; i++){
        if(Object.keys(obj).includes(sentence[i])){
            obj[sentence[i]] ++
        }else{
            obj[sentence[i]] = 1
        }
    }


    // cari yang cuma muncul sekali
    var hasil = ''
    for(var props in obj){
        if(obj[props] === 1){
            hasil += props
        }
    }

    console.log(hasil)

}

// findUniqChar('budi pergi ke pasar')


function sumOnlyNum(input){
    var hasil = 0
    for(var i = 0 ; i < input.length ; i++){
        if(input[i] > 0){
            hasil += Number(input[i])
        }
    }
    console.log(hasil)
}

// sumOnlyNum('abc123')

// function spacify(sentence){
//     sentence = sentence.split('')
//     console.log(sentence.join(' '))
// }



function spacify(str) {

    var a = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            a += str[i] + " "
        }else{
            a+= str[i]
        }
    }

    return a
}

// console.log(spacify('budi pergi ke pasar'))




function findMiddle(word){
    if(word.length === 2){
        return ''
    }
    if(word.length % 2 === 1){
        var mid = Math.floor(word.length/2)
        return word[mid]
    }else{
        var mid1 = (word.length / 2) - 1 
        var mid2 = word.length / 2
        return word[mid1] + word[mid2]
    }
}

function concateMiddle(sentence){
    var hasil  =''
    sentence = sentence.split(' ')
    for(var i = 0 ; i < sentence.length ; i++){
        var middle = findMiddle(sentence[i])
        hasil += middle
    }
    console.log(hasil)
}

concateMiddle('budi go to the market')
// budi pergi ke pasar
// buku




