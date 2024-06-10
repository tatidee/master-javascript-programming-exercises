function findShortestElement(arr) {
    // your code here
    if(arr.length ===0) return 0

    let ansArr =[]
    let shortest= arr[0].length
    for (var i =0; i<arr.length; i++)
    {
      if(arr[i].length < shortest)
      {
        shortest=arr[i].length
        ansArr=[]
        ansArr.push(arr[i])
      }
      else if (arr[i].length === shortest)
      {
        ansArr.push(arr[i])
      }
    }
    return ansArr[0]
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'