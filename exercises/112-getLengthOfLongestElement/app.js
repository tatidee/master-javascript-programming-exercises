function getLengthOfLongestElement(arr) {
    // Your code here
        if (arr.length ===0) return 0
        var maxLength = arr[0].length
        for ( var i =0; i < arr.length; i++)
        {
          if(arr[i].length > maxLength)
          {
            maxLength= arr[i].length
          }
        }
       return maxLength
      }


let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
