/*Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
Calling this returned function with a single argument will then return the sum:
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.
If either argument isn't a valid number, return undefined.*/

function addTogether() {
  var arg1 = arguments[0];

  if(typeof arg1==="number" && typeof arguments[1]==="number"){
    return arg1 + arguments[1];

  }else if (typeof arg1==="number" && arguments[1]===undefined){
    return function(x) {
      if(typeof arguments[0] ==="number"){
        return x + arg1;
      }else{return undefined;}
    };
  }else{return undefined;}
}

var sumTwoAnd = addTogether(2);
sumTwoAnd(3);

//Completed Apr 22, 2018.
