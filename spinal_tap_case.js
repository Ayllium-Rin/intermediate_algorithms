/*Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.*/


//Fun with RegExp. The idea was to boil down the string to a lowest common //denominator.

function spinalCase(str) {
//Removes the underscores and converts them to spaces...
  str = str.replace(/[_]/g, function(match){
    return " ";
  });
//Split the string along the spaces...
  str = str.split(" ");
//Set the first letter of each word to an uppercase...
  for (var i=0; i<str.length; i++){
    if (str[i][0] === str[i][0].toLowerCase()){
      str[i] = str[i].replace(/[a-z]/, function(match) {
        return match.toUpperCase();
      });
    }
  }
//Rejoin the string to a spaceless state...
  str = str.join("");
//Convert the first letter of each string to a lowercase...
  str = str.replace(/[A-Z]/, function(match){
  return match.toLowerCase();
  });
//Divide the string up based on the remaining uppercase letters adding a '-'...
//Set the uppercase to lowercase...
  str = str.replace(/[A-Z]/g, function(match){
    return "-" + match.toLowerCase();
  });
  return str;
}

spinalCase("This Is Spinal Tap");

//Completed Apr 16, 2018.
