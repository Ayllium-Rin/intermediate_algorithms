/*Flatten a nested array. You must account for varying levels of nesting.*/

function steamrollArray(arr) {

  var breakLoop=0;//Check valve for loop.
  while(breakLoop<arr.length){
    if(Array.isArray(arr[0])===true){
      arr[0].forEach(function(val){arr.push(val);});
      arr.shift();
    }else{arr.push(arr[0]);arr.shift();}
//Check for sub-arrays...
    arr.forEach(function(val){if(Array.isArray(val)===false){
      breakLoop++;
      }else{breakLoop=0;}
    });
  }

  return arr;
}
//As per self test, this solution still has problems returning the array in the //approperiate order.  It will, however, rootout all sub-arrays.
steamrollArray([[[[1,2,3],4,5,6],[7,8,9],1,2,3],[7,8,9],5]);

//Completed Apr 19, 2018.
