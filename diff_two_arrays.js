/*Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/
function diffArray(arr1, arr2) {
  var newArray = [];
  var newArr2 = arr2;
  
  for (var i=0; i<arr1.length; i++){
    newArr2.push(arr1[i]);
  }
  
  for (var j=0; j<newArr2.length; j++){
    if (newArr2.lastIndexOf(newArr2[j]) == newArr2.indexOf(newArr2[j])){
      newArray.push(newArr2[j]);
    }
  }
  return newArray;
}

diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] );

//Completed Apr 05, 2018.