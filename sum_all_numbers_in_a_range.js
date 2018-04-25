/*We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
The lowest number will not always come first.*/


function sumAll(arr) {
  
  var x = arr.reduce(function(a, b) {
    return Math.max(a, b);
  });
  
  var y = arr.reduce(function(a, b) {
    return Math.min(a, b);
  });
  
  var sum = 0;
  var z = x-y;
  for (var i=0; i<=z; i++) {
    sum += y++;
  }
  return sum;
}

sumAll([5, 10]);

//Completed Apr 03, 2018