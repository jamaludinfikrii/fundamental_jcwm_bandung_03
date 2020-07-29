// ********** 1

function findMedian(angka){
    var median = angka.length % 2 == 1 ? angka[ Math.floor(angka.length/2)] : (angka[(angka.length/2) - 1] + angka[angka.length/2])/2
    return median
}

function remove_outlier(numbers){
    console.log('Data Asli = ' + numbers)
    const sorted = [...numbers].sort(function(a,b){return a-b});
    console.log('Data Setelah di sort = ' + sorted)

    var mid_1 = Math.floor(sorted.length/2)
    // var mid_2 = sorted.length % 2== 1 ? mid_1 + 1 : mid_1 

    if(sorted.length % 2 == 1){
        var mid_2 = mid_1 + 1
    }else{
        var mid_2 = mid_1
    }

    var firstHalf = sorted.slice(0,mid_1)
    var secondHalf = sorted.slice(mid_2)

    console.log('Setengah data pertama = ' + firstHalf)
    console.log('Setengah data kedua = ' + secondHalf)

    var q1 = findMedian(firstHalf)
    var q3 = findMedian(secondHalf)
    var iqr = q3 - q1
    var lower = q1 - (1.5*iqr)
    var upper = q3 + (1.5*iqr)

    console.log('Q1 = ' + q1)
    console.log('Q3 = ' + q3)
    console.log('Upper Limit = ' + upper)
    console.log('Lower Limit = ' + lower)

    var newData = []
    for(var i = 0 ; i < numbers.length ; i ++){
        var a= numbers[i]
        if(a <= upper && a >= lower){
            newData.push(a)
        }
    }

    console.log("Data yang tidak outlier = " + newData)
}


// remove_outlier([71, 70, 73, 70, 70, 69, 70, 72, 71, 300, 71, 69]) 
// remove_outlier([60,63,64,62,69,80,1,60,63,64,60])






// IF TERNARY

// var nilai = 90

// if(condition){
//     action if true
// }else{
//     action if false
// }
// if ternary condition ? action if true : action if false
// var summary = nilai > 70 ? "Lulus" : "Remed"



// ******** 2


function countVowel (sentences){
    var count = 0
    for(var i = 0 ; i < sentences.length ; i ++){
        var char = sentences[i]
        // if(char === 'a' || char === 'i' || char === 'e' || char ==='u' || char ==='o' ){
        //     count++
        // }
        if('aiueo'.includes(char)){
            count++
        }
    }
    console.log(count)
}


// countVowel('budi pergi ke pasar')



// *********** 3


function given(array){
    var newArr = []  // i < 4
    for(var i = 0 ; i < array.length ; i++){ // i = 0  | 1
        // j < 3
        // for(var j = 0 ; j < array[i].length ; j++){ // j = 0 | 1 | 2 | 3 | 0
        //     newArr.push(array[i][j])
        // } 
        newArr.push(...array[i])
    }

    newArr.sort(function(a,b){return a-b})
    console.log(newArr)
}



// given(
//     [
//         [3, 2, 1],
//         [4, 6, 5],
//         [],
//         [9, 7, 8]
//     ]) 



// ********** 4


function findEven(numbers,limit){
    var newArr = []
    for(var i = 0 ; i < numbers.length ; i++){
        if(numbers[i] % 2 === 0){ 
            newArr.push(numbers[i])
        }
    }

    newArr = newArr.slice(-limit)
    console.log(newArr)
}

// findEven([1, 2, 3, 4, 5, 6, 7, 8, 9],  3)



// ********** 5

function countWords (sentences){
    sentences = sentences.split(' ')
    var obj ={}
    for(var i = 0 ; i < sentences.length ; i++){
        if(Object.keys(obj).includes(sentences[i])){
            obj[sentences[i]] ++
        }else{
            obj[sentences[i]] = 1
        }
    }

    for(var props in obj){
        console.log("jumlah kata '"+props+"' ada sebanyak " + obj[props])
    }

}

countWords('jangan jangan kamu adalah aku')


