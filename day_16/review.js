function countAlpha(a,b){
    var total = 0
    for(var i = 0 ; i < a.length; i++){
       if(a[i] === b){
           total ++
       }
    }
    console.log(total)
}

// countAlpha('budi pergi ke pasar','b') // 1
// countAlpha('purwadhika','a') // 2


function findMissing(numbers){
    // cari min dan max
    var min = Math.min(...numbers)
    var max = Math.max(...numbers)

    // looping sebanyak min dan max
    for(var i = min ; i <= max ; i++){
        if( !numbers.includes(i)){
            console.log(i)
        }
    }

    // trus cari yang miss
}

// findMissing([1,2,3,5,6,7]) // 4
// findMissing([3,4,5,1,6]) // 2


function countPair(array){
    var obj = {}

    for(var i = 0 ; i < array.length ; i++){
        if(Object.keys(obj).includes(array[i])){
            obj[array[i]]++
        }else{
            obj[array[i]] = 1
        }
    }

    var count = 0
    for(var props in obj){
        count += Math.floor(obj[props] / 2)
    }

    console.log(count)
}

countPair(['red','red','blue','yellow']) // 1
countPair(['red','red','red','red']) // 2
countPair(['red','red','red','blue']) // 1
countPair(['red','red','red','blue','yellow','blue']) // 2



// VARIABEL
// declare, call

// PENGKONDISIAN; conditional statement

// LOOPING:

// ARRAY

// FUNCTION

// OBJECT

// CLASS


// Menterjemahkan ide kalian ke code??

