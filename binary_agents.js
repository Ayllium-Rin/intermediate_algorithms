/*Return an English translated sentence of the passed binary string.
The binary string will be space separated.*/

function binaryAgent(str) {
  var utfTranslationArray=[],
      biTranslationArray=[],
      iArray=[],
      finishArray=[],
      translation="",
      i=0;
//Assign the relevant values from utf-16 to an array:
  for(i=32;i<123;i++){utfTranslationArray.push(i);}
//Derive a binary array corresponding to the values above:
  utfTranslationArray.forEach(function(val){biTranslationArray.push(val.toString(2));});
//split the string into an array:
  str = str.split(" ");
//further split string and modify format to accept translation //arrays:
  for(i=0;i<str.length;i++){
    str[i]=str[i].split("");
    if (str[i][1]!=="0"){
      str[i] = str[i].splice(1,7).join("");
      iArray.push(str[i]);
    }else if (str[i][1]==="0"){
      str[i] = str[i].splice(2,7).join("");
      iArray.push(str[i]);
    }
  }
//use the binary array to interpret the utf-16 values:
  for(i=0;i<iArray.length;i++){
    if(biTranslationArray.indexOf(iArray[i])>=0){
      finishArray.push(utfTranslationArray[biTranslationArray.indexOf(iArray[i])]);
    }
  }
//translate the retrieved values:
  finishArray.forEach(function(val){translation+=String.fromCharCode(val);});

  return translation;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

//Completed Apr 20, 2018.
