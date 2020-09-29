
var average = 0; /*  global variable*/

function getAverage (a,b) {

  average = (a + b) / 2;
  console.log(average);
  return average;

}
   var myResult = getAverage(7, 8);
  

function logResult() {
   console.log ("the average is " + myResult  + " inside the function");

}

logResult ();

/*  
and here is local variable var average

function getAverage (a,b) {
 
 var average = (a + b) / 2;  /local variable/
 console.log(average);
 return average;
 
}
  var myResult = getAverage(7, 8);
 
function logResult() {
  console.log ("the average is " + myResult  + " inside the function");
 
}
 
logResult ();

*/
