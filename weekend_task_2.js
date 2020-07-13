// ******** 1
// Function FindMax
// only accepts 3 parameters
function findMax(angka1,angka2,angka3){  // angka1 = 3, angka2 = 4, angka3 = 5
    var max = 0 // max = 3 // max = 4 // max = 5
    if(angka1 > max){
        max = angka1
    }
    if(angka2 > max){
        max = angka2
    }
    if(angka3 > max){
        max = angka3
    }

    console.log(max)
}


findMax(3,4,5)  // 5
findMax(8,4,5)  // 8
findMax(8,9,5)  // 9


// ******** 2
// Function SumLoop
// Accepts three parameters
// sumLoop(begin,end,gap)

function sumLoop(begin,end,gap){

    var sum = 0
    while(begin < end){
        sum += begin
        begin = begin + gap
    }

    console.log(sum)
}

sumLoop(0,5,1) // return 10, because 0 + 1 + 2 + 3 + 4
sumLoop(1,10,3) // return 12, because 1 + 4 + 7
sumLoop(2,8,4) // return 8, because 2 + 6


function fundDigits(digitToSearch,array){
    for(var i = 0; i < array.length ; i ++){
        if(array[i] == digitToSearch){
            // ketika return dipanggil, dia bakalan langsung keluar dari funtion
            return true
        }
    }
    return false
}

// ******** 3
// Function  FindDigit
// Accepts Two Parameters
// findDigits(digitToSearch,array)
console.log(fundDigits(5,[2,4,5])) // return true
console.log(fundDigits(3,[2,4,5])) // return false
console.log(fundDigits(1,[2,4,5])) // return false


// ******** 4
// Function How Many Char in Array
// Accepts Two Parameters
// homManyChar(charToSearch, sentences)
function howManyCar(charToSearch,sentences){
    var count = 0
    for(var i = 0 ; i< sentences.length ; i++){ 
        if( sentences[i].toLowerCase() == charToSearch.toLowerCase()){
            count ++
        }
    }

    console.log(count)
}
howManyCar('i','Purwadhika Digital School') // return 3
howManyCar('a','Purwadhika Digital School') // return 3
howManyCar('p','Purwadhika Digital School') // return 1


// ******** 5
// function Waves
// accepts one parameter
// waves(word)
waves('fikri') // return Fikri fIkri fiKri fikRi fikrI
waves('abc') // return Abc aBc abC



