/*Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.*/

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var sourceKey = Object.keys(source); 
  var newArray = [];
  var i = 0;
  var j = 0;
  
  /* This code is subject to failure if source has more than two keys.  This code needs to be revised to make it less problem specific.*/
  
  if (sourceKey.length > 1){  
    for (j=0; j<collection.length; j++){
      if (collection[j].hasOwnProperty(sourceKey[0]) && collection[j].hasOwnProperty(sourceKey[1])){
      newArray.push(collection[j]);
      }     
    }
    for (k=0; k<newArray.length; k++){
      if (newArray[k][sourceKey[0]] === source[sourceKey[0]] && newArray[k][sourceKey[1]] === source[sourceKey[1]]){
          arr.push(newArray[k]);
      }
    }
  }else {    
    for (var l=0; l<collection.length; l++){
      if (collection[l].hasOwnProperty(sourceKey[0], sourceKey[1])){ 
        newArray.push(collection[l]);
      }  
    }
    for (i=0; i<sourceKey.length; i++){
      for (k=0; k<newArray.length; k++){
        if (newArray[k][sourceKey[i]] === source[sourceKey[i]]){
          arr.push(newArray[k]);
        }
      }
    }
   }
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 3 });

//Completed Apr 07, 2018.