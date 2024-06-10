// Write your function here
function isEitherEven(numero, numero2) 
{ 
  if (numero % 2 === 0 || numero2 % 2 === 0){
    return true;
  } else{
    return false;
  }
 }

let output = isEitherEven(1,4);
console.log(output); // --> true
