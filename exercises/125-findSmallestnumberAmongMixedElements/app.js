function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  
  let min = Infinity;

 
for(let e of arr){
  if(typeof e ==='number' && e < min ){
    min = e 
  }
}
if (min === Infinity){
  return 0;
  
}else return min;

 
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
