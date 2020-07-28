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

// console.log(output)




// *****
// ****
// ***
// **
// *


var output = ''
for(var i = 0 ; i < 5 ; i ++){
    for(var j = 0 ; j < 5-i ; j++){
        output +='*'
    }
    output += '\n'
}


// console.log(output)

// space = berbanding terbalik dengan baris
// jumlah bintang
// baris


//   *
//  ***
// *****



var output = ''
var bintang = 1
for(var i = 0 ; i < 5;i++){

    for(var j = 0 ; j < 5-i ; j++){
        output += ' '
    }
    
    for(var k = 0 ; k < bintang ; k++){
        output += '*'
    }

    bintang += 2
    output +='\n'
}

// console.log(output)


// 1 2 3
// 2 4 6
// 3 6 9


function multiplicationTable(row,col){
    var output = ''
    for(var i = 0 ; i < row; i++){
        var angka = i+1
        for(var j = 0 ; j < col ; j++){
            output += angka + ' '
            angka += i+1
        }
        output += '\n'
    }

    console.log(output)
}

multiplicationTable(3,3)
