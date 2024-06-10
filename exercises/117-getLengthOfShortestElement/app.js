function getLengthOfShortestElement(arr) {
    // your code here
    if(arr.length ===0) return 0
    let short = arr[0].length
    for (let i =0; i<arr.length; i++)
    {
      if(arr[i].length < short)
      {
        short=arr[i].length
      }
    }
    return short
  }

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
