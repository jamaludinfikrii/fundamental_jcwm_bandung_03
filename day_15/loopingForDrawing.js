// ******

// var output = ''
// for(var i = 0 ; i < 5 ; i++){
//     output += '*'
// }

// console.log(output)


// *****
// *****
// *****

var output = '' // **\n**\n

for(var i = 0 ; i < 5 ; i ++){ // i = 0 | 1 | 2

    for(var j = 0 ; j < 5 ; j ++){ // j = 0 | 1 | 2 | 0 | 1 | 2
        output += '*' // berapa kali di execute ??? 25
    }

    output+= '\n' // berapa kali di execute ?? 5
}

// console.log(output)




// *
// **
// ***
// ****
// *****



var output = '' //  *\n**\n***\n
for(var i = 0 ; i < 3; i++){ // i = 0 | 1 | 2
    for(var j = 0 ; j < i+1 ; j ++){ // j = 0 | 1  | 0 |1|2|0   || j < 3
        output +='*'
    }

    output += '\n'
}

console.log(output)