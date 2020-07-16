function findOutlier(integers){
    // your code here
    var ganjil = [] // [3,1,3,5]
    var genap = [] // [2]
    
    for(var i = 0 ; i < integers.length ; i++){
      if((integers[i] % 2) == 0){
        genap.push(integers[i])
      }else{
        ganjil.push(integers[i])
      }
    }
    
    if(ganjil.length == 1) {
      return ganjil[0]
    }
    else if(genap.length == 1){
      return genap[0]
    }}