/*The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.*/

function pairElement(str) {
  var newArray = [];
  str = str.split("");
  
  str.forEach(function(i){
    
    if (i == "G"){
      var g = [];
      g.push(i);
      g.push("C");
      newArray.push(g);
    } else if (i == "C"){
      var c = [];
      c.push(i);
      c.push("G");
      newArray.push(c);
    }else if (i == "A"){
      var a = [];
      a.push(i);
      a.push("T");
      newArray.push(a);
    }else if (i == "T"){
      var t = [];
      t.push(i);
      t.push("A");
      newArray.push(t);
    }
  });  
  
  return newArray;
}

pairElement("GCG");

//Completed Apr 07, 2018.