/*Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
Check the assertion tests for examples.*/

function uniteUnique(arr) {
  var newArr = [];

  for (i=0; i<arguments.length; i++) {
    newArr = newArr.concat(arguments[i]);
  }

  for (var j=0; j<newArr.length; j++){
    for (var k=j+1; k<newArr.length; k++){
      if (newArr[j] === newArr[k]) {
        newArr.splice(k, 1);
      }
    }
  }

  return newArr;
}

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);

//Completed Apr 15, 2018.
