// [COUNT TOTAL CHAR]

function countChars(findChar, sentences){

    var totalChars = 0

    for(var i = 0; i < sentences.length; i++){
        if(findChar == sentences[i]){
            totalChars += 1
        }
    }

    return totalChars
}

console.log(countChars('i','Purwadhika Digital School'))
console.log(countChars('a','Purwadhika Digital School'))
console.log(countChars('p','Purwadhika Digital School'))
