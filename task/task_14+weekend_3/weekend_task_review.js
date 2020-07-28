
function findShort(sentence){
    sentence  = sentence.split(' ')
    var lengthWord = []
    for(var i = 0; i < sentence.length ; i++){
        lengthWord.push(sentence[i].length)
    }
    
    console.log(Math.min(...lengthWord))
    
}

// findShort("Many people get up early in the morning")



function persistence(num){
    num = String(num)
    var count = 0
    while(num.length > 1){
        var total = 1
        for(var i = 0 ; i < num.length ; i ++){
            total *= num[i]
        }
        count ++
        num = String(total)
    }
    console.log(count)
}

// persistence(39)
// persistence(999)



function alphabetPosition (sentences){
    sentences = sentences.replace(/ /g,'')
    var alpha = 'abcdefghijklmnopqrstuvwxyz'
    var output = ''
    for(var i = 0 ; i < sentences.length ; i ++){
        var indexKe = alpha.indexOf(sentences[i]) + 1 + ' '
        if(indexKe > 0){
            output += indexKe
        }
    }
    console.log(output)
    
}


// alphabetPosition('budi pergi ke pasar')
// alphabetPosition('it’s never too late to try')



function multiplicationTable (row,col){
    var output = ''
    for(var i = 0 ; i < col ; i ++){
        var angka = i +1
        for(var j = 0 ; j < row ; j ++){
            output += angka + ' '
            angka += i+1
        }
        output += '\n'
    }
    console.log(output)
}

multiplicationTable(3,5)










// var alpha = 'abcdefghijklmnopqrdtuvwxyz'
// var a = 'c'
// console.log(alpha.indexOf(a) + 1)






// var a = 'budi_pergi_ke_pasar'
// a =  a.split('i')
// console.log(a)




// var angka = 2457236857823


// angka = String(angka)
// var total = 1
// for(var i = 0 ; i < angka.length ; i ++){
//     total *= angka[i]
// }

// console.log(total)



