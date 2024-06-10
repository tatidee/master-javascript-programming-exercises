// Write your function here
function isOddLength(word) 
{ 
    
    for(i = 0; i < word.length; i++){
        if (word.length % 2 === 1){
            return true;
          } else{
            return false;
          }
    }

 }

let output = isOddLength('special');
console.log(output); // --> true

