// [FIND MIDDLE CHAR]

function findMiddle(sentence){
    var result = ''

    var midd1 = sentence.length / 2
    var midd2 = Math.floor(sentence.length / 2)

    if(sentence.length % 2 == 0){
        result += sentence[midd1-1] + sentence[midd1]
    }else{
        result += sentence[midd2]
    }

    return result
}

console.log(findMiddle('Purwadhika'))
console.log(findMiddle('Testing'))