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

function waves(word){
    var output = ''
    for(var i = 0 ; i < word.length ; i++){
        output += word.slice(0,i) + word[i].toUpperCase() + word.slice(i+1,word.length) + ' '
    }
    console.log(output)
}

waves('fikri') // return Fikri fIkri fiKri fikRi fikrI
waves('abc') // return Abc aBc abC














function findShortest(arr){
    var min = arr[0] // budi

    for(var i = 1 ; i <arr.length;i++){
        if(arr[i].length < min.length){
            min = arr[i]
        }
    }
    console.log(min)
}
findShortest(['budi','pergi','ke']) // ke
findShortest(['aku','cinta','purwadhika']) // aku


function checkExam (kunci,jawaban){
   var totalBenar = 0
//    if(kunci[0] == jawaban[0]){
//         totalBenar ++
//    }
//    if(kunci[1] == jawaban[1]){
//        totalBenar ++
//    }
//    if(kunci[2] == jawaban[2]){
//        totalBenar ++
//    }
//    if(kunci[3] == jawaban[3]){
//        totalBenar ++
//    }

    for(var i = 0 ; i< kunci.length ; i ++){
        if(kunci[i] == jawaban[i]){
            totalBenar ++
        }
    }
   console.log(totalBenar * 3)
}

checkExam(["a", "a", "b", "b","c"], ["a", "c", "b", "d","c"]) // bener * 3 = 9
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) // bener * 3 = 6
checkExam(["a", "a", "c", "b"], ["a", "a", "a",  "a"]) // bener * 3 = 6




//********* 1 isDivisible(num,div1,div2) 
// Accepts Three Parameters

function isDivisible(num,div1,div2){
    // modulus %
    if(((num % div1) == 0) && ((num % div2) == 0)){
        console.log(true)
    }else{
        console.log(false)
    }
}


isDivisible(100,5,2) // true
isDivisible(10,3,1) // false
isDivisible(12,3,4) // true


// ******** 2 monthConverter(num)
function monthConverter(num){
    var dataMonth = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Agus','Sept','Okt','Nov','Des']
    console.log(dataMonth[num-1])
}

monthConverter(4) // April


