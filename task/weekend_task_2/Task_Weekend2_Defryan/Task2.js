// [SUM LOOP]

function sumLoop(num1, maxNum, num2){

    var start = num1
    var output = []
    var total = 0

    while(start < maxNum){
        output.push(start)
        start += num2
    }
    for(var i = 0; i < output.length; i++){
        total += output[i]
    }

    return total
}

console.log(sumLoop(0, 5, 1))
console.log(sumLoop(1, 10, 3))
console.log(sumLoop(2, 8, 4))