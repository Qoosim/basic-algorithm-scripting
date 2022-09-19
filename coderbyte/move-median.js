unction ArrayAdditionI(arr) { 

  arr = arr.sort(function(a,b){return a-b;});
  var largestval = arr.pop();
  var sum = arr.reduce(function(x,y){return x +y;});

  for (var i = arr.length-1; i>=0; i--){
    if (sum-arr[i]==largestval){
      return true;
  }
    if (largestval-sum == 0){
      return true;
    }
  }
  return false;
}

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArrayAdditionI(readline());    
