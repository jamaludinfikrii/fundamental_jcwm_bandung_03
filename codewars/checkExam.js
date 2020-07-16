function checkExam(array1, array2) {
    var score = 0
    for(var i = 0 ; i < array1.length ; i ++){
      var kunci = array1[i]
      var jawaban = array2[i]
      if(jawaban == ''){
        score += 0
      }else if(jawaban != kunci){
        score -= 1
      }else{
        score += 4
      }
    }
   
   if(score < 0){
     return 0
   }else{
     return score
   }
 }