function getMiddle(words){
    return words.length % 2 == 0 ? words[(words.length/2) -1] + words[(words.length/2)] :  words[Math.floor(words.length/2)]
}

function accum(words){
    var output = ''
    for(var i = 0 ; i < words.length ; i++){
        output+= words[i].toUpperCase()
        output += words[i].repeat(i).toLowerCase()
        output += '-'
    }
    output = output.slice(0,output.length-1)
    console.log(output)
}
