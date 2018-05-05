/*Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.*/

//noprotect
function smallestCommons(arr) {

  var sortedArray = arr.sort(function(a,b){return a-b;});
  var x=0;
  var y=sortedArray[1];

  while (x<sortedArray[1]){
    for (var i=sortedArray[0]; i<=sortedArray[1]; i++){
      if (y%i === 0){
          x++;
      }else {
          x=0;
          y++;
      }
    }
  }
  return y;
}


smallestCommons([1, 13]);

//Completed Apr 17, 2018.
