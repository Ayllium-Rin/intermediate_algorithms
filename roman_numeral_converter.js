/*Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.*/

function convertToRoman(num) {
  var roman = "";
  //Explodes num into individual numeric place (1s, 10s, 100s, 1000s).
  var thousands=(num-num%1000)/1000; 
  var x=num%1000; 
  var hundreds=(x-x%100)/100;
  var y=x%100; 
  var tens=(y-y%10)/10; 
  var ones=y%10;
  //Directs individual numeric place values to function for symbol assignment.
  if (thousands > 0){
     for(var i=1;i<=thousands;i++){
      roman += "M";
     }
  }
  
  if (hundreds > 0){roman += romanNumerals(hundreds, 100);}
  if (tens > 0){roman += romanNumerals(tens, 10);}  
  if (ones > 0){roman += romanNumerals(ones, 1);}
  
  return roman;
}
  //Function to assign symbols to individual numeric place.
function romanNumerals(y, z){
  var numerals = "";
  var a="";
  var b="";
  var c="";
  //Defines which numeric place the function is working with.
  if (z == 100){
    a="M";
    b="D";
    c="C";
  }else if (z == 10){
    a="C";
    b="L";
    c="X";
  }else if (z == 1){
    a="X";
    b="V";
    c="I";
  } 
    //Assigns symbols to numeric place values and adds them to string.
    if (y == 9){
      numerals+= c + a;
    }else if (y == 5){
      numerals+= b;
    }else if (y == 4){
      numerals+= c + b;
    }else if (y < 4){
       for(var i=1;i<=y;i++){
         numerals+= c;
       }            
    }else { //greater than 5 values.
      numerals+= b;
      y-=5;
      for(var j=1;j<=y;j++){
        numerals+= c;
      }
    }
    return numerals;
  }

convertToRoman(2);


//Completed Apr 05, 2018.