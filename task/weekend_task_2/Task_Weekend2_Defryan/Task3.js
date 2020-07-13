// [FIND DIGITS]

function findDigits(digitToFind, number){
    
    for(var i = 0; i < number.length; i++){
        if(digitToFind == number[i]){
            var output = 'True'
        }else{
            output = 'False'
        }
    }

    return output
}

console.log(findDigits(5,[2,4,5]))
console.log(findDigits(3,[2,4,5]))
console.log(findDigits(1,[2,4,5]))