// [FIND MAX NUMBER]

function findMax(num1){
    
    var maxNum = 0
    for(var i = 0; i <= num1.length; i++){
        if(num1[i] >= maxNum){
            maxNum = num1[i]
        }else if(num1[i] < maxNum){
            maxNum = maxNum
        }
    }

    return maxNum
}

console.log(findMax([3,4,5]))
console.log(findMax([8,4,5]))
console.log(findMax([1,9,5]))
