function getElementsAfter(array, n) {
  // your code here
  let newarray =array.slice(n+1)
  return newarray 
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
