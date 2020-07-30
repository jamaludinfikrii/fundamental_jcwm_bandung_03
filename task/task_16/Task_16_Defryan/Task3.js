// [LOOPING ALPHABETS]

function loopingAlpha(alpha){
    var output = ''

    for(var i = 0; i < alpha.length; i++){
        for(var j = 0; j <= i; j++){
            if(i == 0 && j == 0){
                output += alpha[i].toUpperCase() + '-'
            }else if(j == 0){
                output += alpha[i].toUpperCase()
            }else if(i == alpha.length-1 && j == i){
                output += alpha[i].toLowerCase()
            }else if(j == i){
                output += alpha[i].toLowerCase() + '-'
            }else{
                output += alpha[i].toLowerCase()
            }
        }
    }

    return output
}

console.log(loopingAlpha('abcd'))