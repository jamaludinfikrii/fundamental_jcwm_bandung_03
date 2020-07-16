function solve(arr){
    var newArr = [] // [3,4,4,3,6,3]
    var temp = 0
    for(var i = arr.length-1 ; i >=0 ; i --){
      if(!(newArr.includes(arr[i]))){
        newArr.push(arr[i])
      }
    }
  return newArr.reverse()
}