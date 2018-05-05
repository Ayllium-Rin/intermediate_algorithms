/*Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.*/

function dropElements(arr, func) {
  var newArray = arr.filter(func);

  if (arr.indexOf(newArray[0]) > 0){
    arr = arr.splice(arr.indexOf(newArray[0]));
  }else {
    arr = newArray;
  }
  return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;});

//Completed Apr 19, 2018.
