// [Upper Case Waves]

function upperCase(sentence){

    var sliceChar1
    var sliceUpperCaseChar
    var outputUpperCaseChar = []

    var sliceChar2
    var outputLowerCaseChar = []

    var outputChar1 = []
    var outputChar2 = []
    for(var i = 0; i < sentence.length; i++){
        sliceChar = sentence.slice(i, i+1)
        sliceUpperCaseChar = sliceChar.toUpperCase()
        outputUpperCaseChar.push(sliceUpperCaseChar)

        sliceChar2 = sentence.replace(sentence[i], ' ')
        outputLowerCaseChar.push(sliceChar2)
    }

    for(var i = 0; i < outputLowerCaseChar.length; i++){
        outputChar1 = outputLowerCaseChar[i].replace(/ /, outputUpperCaseChar[i])
        outputChar2.push(outputChar1)
    }

    return outputChar2
}

console.log(upperCase("defryan"))
console.log(upperCase("fikri"))