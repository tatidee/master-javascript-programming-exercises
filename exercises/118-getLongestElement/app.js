
function getLongestElement(arr) {
    // your code here
    if (arr.length < 1) return '';
  
    let long = '';
    for (let e of arr) {
      if (e.length > long.length) long = e;
    }
    
    return long;
  }


let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
