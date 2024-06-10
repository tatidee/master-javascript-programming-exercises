// Write your function here
function areBothOdd(numero, numero2) 
{ 
  if (numero % 2 === 1 && numero2 % 2 === 1){
    return true;
  } else{
    return false;
  }
 }

let output = areBothOdd(1,3);
console.log(output); // --> true
