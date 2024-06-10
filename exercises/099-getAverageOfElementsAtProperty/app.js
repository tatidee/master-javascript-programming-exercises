function getAverageOfElementsAtProperty(obj, key) {
  // your code here

  if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0) {
    return 0;
}

let a = 0;

for (let i = 0; i < obj[key].length; i++) {
  a+=obj[key][i] 
}

return a / obj[key].length;
}
let obj = {
  key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2  