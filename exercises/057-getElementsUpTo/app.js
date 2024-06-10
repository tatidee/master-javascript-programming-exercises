function getElementsUpTo(array, n) {
  // your code here
  let newarray =array.slice(0,n)
  return newarray 
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']
