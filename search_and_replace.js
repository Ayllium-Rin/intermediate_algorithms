/*Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"*/

function myReplace(str, before, after) {
  
  str = str.split(" ");
  
  if(str.indexOf(before)>=0){
    if(before[0]===before[0].toUpperCase()){
      after = after.split("");
      after[0]=after[0].toUpperCase();
      after = after.join("");
      str.splice(str.indexOf(before), 1, after);
    }else{str.splice(str.indexOf(before), 1, after);}
  }
  str = str.join(" ");
  return str;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

//Updated Apr 23, 2018.


/*
function myReplace(str, before, after) {
  
  str = str.split(" ");
  
  for (var i=0; i<str.length; i++){
    if (str[i] === before) {
      var newArray = [];
      newArray = before.split("");
      if (newArray[0] === newArray[0].toUpperCase()) {
        newArray = after.split("");
        newArray[0] = newArray[0].toUpperCase();
        after = newArray.join("");
        str.splice(i, 1, after);
      }else {
        str.splice(i, 1, after);        
      }
    }      
  }
  
  str = str.join(" ");
  
  return str;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
*/
//Completed Apr 07, 2018.