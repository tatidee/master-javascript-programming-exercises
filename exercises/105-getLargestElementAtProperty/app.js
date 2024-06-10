function getLargestElementAtProperty(obj, key) {
    // your code here
    if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
      return []
  }
    let large = obj[key][0]
    for (let elem in obj[key])
         {
         if( obj[key][elem] > large)
          large = obj[key][elem]
         }
    return large
  
}

let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
