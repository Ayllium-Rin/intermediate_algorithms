/*Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.*/

function fearNotLetter(str) {
  var i = 0;
  var newArray = [];
  var check = 0;
  var missingLetter = "";
  var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  str = str.split("");
  
  for (i=0; i<str.length; i++){ //Creates a numeric map of the str array.
    newArray.push(alpha.indexOf(str[i]));
  }  
  
  for (i=1; i<newArray.length; i++){  //Tests the numeric map for holes.
    if (newArray[i] - newArray[i-1] != 1){
      var index = newArray[i] - newArray[i-1] - 1;
      for (var j=0; j<index; j++){
        missingLetter += alpha[newArray[i-1]+1+j]; //Translates the missing values.
      }
    }else {
      check++; //Keeps track of success.
    }
  }
  
  if (check + 1 == str.length){ //Determines if there were no holes.
    missingLetter = undefined;
  }
    
  return missingLetter;
}

fearNotLetter("bcd");

//Completed Apr 08, 2018.