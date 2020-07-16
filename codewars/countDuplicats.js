function duplicateCount(text){
    text = text.toLowerCase() 
    var countAlphaBet = {} // {key/param : value} { a : 1 }
    
    for(var i = 0 ; i < text.length; i++){
        var alpha = text[i]
        if(Object.keys(countAlphaBet).includes(alpha)){
            countAlphaBet[alpha] ++ 
        }else{
            countAlphaBet[alpha] = 1
        }
    }

    var numOfDuplicat = 0
    for(var prop in countAlphaBet){
        if( countAlphaBet[prop] > 1 ){
            numOfDuplicat ++
        }
    }

    return numOfDuplicat
    
}


// duplicateCount("") // 0);
duplicateCount("abcdeeee") // 0);
// duplicateCount("aabbcde") // 2);
// duplicateCount("aabBcde") // 2 //"should ignore case");
// duplicateCount("Indivisibility") // 1)
// duplicateCount("Indivisibilities") // 2, "characters may not be adjacent")



