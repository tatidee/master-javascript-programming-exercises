function getSmallestElementAtProperty(obj, key) {
    // your code here
    if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
      return []
  }
  let small = obj[key][0]
     for (let elem in obj[key]){
       if (obj[key][elem] < small)
       {
        small = obj[key][elem]
       }
     }
     return small
}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
