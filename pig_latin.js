/*Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words in all lowercase.*/

function translatePigLatin(str) {
  
  var startsWithVowl = 0;
  var constUntilVowl = 0;
  var vowl = ['a', 'e', 'i', 'o', 'u'];
  str = str.split("");
  
  for (var i=0; i < vowl.length; i++){
    if (str[0] === vowl[i]) {
      startsWithVowl = 1;
    }
    if (str[2] === vowl[i]) {
      constUntilVowl = 1;
    }
  }
  
  if (startsWithVowl === 1) {
    str.push('way');
  } else if (constUntilVowl === 1) {
    str.push(str[0]);
    str.push(str[1]);
    str.shift(str[0]); 
    str.shift(str[1]);
    str.push('ay');  
  } else {
    str.push(str[0]);
    str.shift(str[0]);
    str.push('ay');  
  }
  
  str = str.join("");
  return str;
}

translatePigLatin("glove");


//Completed Apr 07, 2018.