// getStats
// mean,median,mode,q1,q3


function getMedian(numbers){
    if(numbers.length % 2==1){
        var mid = Math.floor(numbers.length/2)
        return numbers[mid]
    }else{
        var mid_1 = numbers.length / 2
        var mid_2 = mid_1-1
        return (numbers[mid_1] + numbers[mid_2]) / 2
    }
}

function getStats(numbers){
    var mean = 0

    var obj = {}

    for(var i = 0 ; i < numbers.length;i++){
        mean += numbers[i]
        if(Object.keys(obj).includes(String(numbers[i]))){
            obj[numbers[i]] ++
        }else{
            obj[numbers[i]] = 1
        }
    }

    numbers = numbers.sort(function(a,b){return a-b})

    // mean
    mean = mean/numbers.length

    // median
    var median = getMedian(numbers)

    // q1 & q3

    var firstHalf = numbers.length % 2 === 0 ? numbers.slice(0,numbers.length/2) : numbers.slice(0,Math.floor(numbers.length/2))
    var secondHalf = numbers.length % 2 === 0 ? numbers.slice(numbers.length/2) : numbers.slice(Math.ceil(numbers.length/2))
    
    var q1 = getMedian(firstHalf)
    var q3 = getMedian(secondHalf)

    
    // mode

    var mode = 0
    for(var props in obj){
        if(obj[props] > mode){
            mode = props
        }
    }

    console.log(mean)
    console.log(median)
    console.log(mode)
    console.log(q1)
    console.log(q3)

}

// getStats([1,1,2,3,4,4,5,6,7])
// (1 + 2 + 3+ 4 + 5)/5 // 3 (mean)
// 3 median
// mode = null
// q1 =1.5
// q3 = 4.5

function alphaWar(alpha1,alpha2){
    var alphabets = 'abcdefghijklmnopqrstuvwxyz'
    var valueAlpha1 = 0
    var valueAlpha2 = 0

    for(var i = 0 ; i < alpha1.length; i ++){
        valueAlpha1 += alphabets.indexOf(alpha1[i]) + 1
    }

    for(var i = 0 ; i < alpha2.length; i ++){
        valueAlpha2 += alphabets.indexOf(alpha2[i]) + 1
    }
    
    if(valueAlpha2 == valueAlpha1){
        console.log('Draw')
    }else if(valueAlpha1 > valueAlpha2){
        console.log(alpha1 + ' win the war')
    }else{
        console.log(alpha2 + ' win the war')
    }

    // cari alpha1 value berapa
    // cari alpha2 value berapa

    // decide the winner

}

function suitJawa(player1,player2){
    if(player1 === player2){
        console.log('Draw')
    }else if((player1 === 'gajah' && player2 === 'manusia' )||( player2 ==='gajah' && player1 === 'manusia') ){
        console.log('Gajah menang')
    }else if((player1 === 'gajah' && player2 === 'semut') ||( player1==='semut' && player2 ==='gajah')){
        console.log("Semut Menang")
    }else if((player1 === 'manusia' && player2 === 'semut') || (player2 === 'manusia' && player1 === 'semut')){
        console.log("Manusia Menang")
    }else{
        console.log('wrong input')
    }
}


// suitJawa('gajah','semut')


function makeNegative(numbers){
    var newArr = []
    for(var i = 0 ; i < numbers.length ; i++ ){
        newArr.push(- Math.abs(numbers[i]))
    }

    console.log(newArr)
}


// makeNegative([1,2,3,-5,-7,10,3])


function alphaForward(words,inc){
    var alphabets = 'abcdefghijklmnopqrstuvwxyz'
    var newWords = ''
    for(var i = 0 ; i < words.length ; i ++){
        var index = alphabets.indexOf(words[i])
        index += inc
        // index = index % alphabets.length
        newWords += alphabets[index]
    }

    console.log(newWords)
}


alphaForward('abc',25) // cde