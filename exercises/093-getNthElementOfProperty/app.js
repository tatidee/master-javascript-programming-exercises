// Write your function here
function getNthElementOfProperty(obj, key,nth) {
    // your code here
  
    if(!obj[key] || !Array.isArray(obj[key]) || nth >= obj[key].length) {
        return undefined
    }
    return obj[key][nth];
  }
  let obj = {
    key: [1, 2, 6]
  };
  let output = getNthElementOfProperty(obj, 'key', 1);
  console.log(output); // --> 2