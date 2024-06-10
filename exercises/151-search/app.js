function search(array, value) {
  // your code here
  
    if (array.length === 0) return null; // Handle empty array
  
    let start = 0;
    let end = array.length - 1;
  
    for (let mid = start; start <= end; mid = Math.floor((start + end) / 2)) {
      if (array[mid] === value) return mid;
      else if (array[mid] < value) start = mid + 1;
      else end = mid - 1;
    }
  
    return null; // Value not found
  }


let arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 31)); // --> 4
