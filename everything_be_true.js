/*Check if the predicate (second argument) is truthy on all elements of a collection (first argument).*/

function truthCheck(collection, pre) {
  var check=0;

  collection.forEach(function(obj){
   if (!obj[pre]){return check++;}
  });

  if (check>=1){
    return false;
  }else {
    return true;
  }
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

//Completed Apr 21, 2018.
