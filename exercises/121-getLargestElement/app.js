function getLargestElement(arr) {
  // your code here
    //if array is empty, or property at given key not an array, or no property at key
    if (arr === undefined || !(Array.isArray(arr)) || arr.length < 1){
      return 0;  
    }
  
   
    return Math.max.apply(null, arr);
    
  }
  


let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;