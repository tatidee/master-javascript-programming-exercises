function getLargestNumberAmongMixedElements(arr) {
    // your code here
   
  
    let max = 0;

 
for(let e of arr){
  if(typeof e ==='number' && e > max ){
    max = e 
  }
}
if (max === Infinity){
  return 0;
  
}else return max;

 
}


let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
