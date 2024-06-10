function getOddElementsAtProperty(obj, key) {
    // your code here
    if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
      return []
  }

  let arr = obj[key]
  let newArr = []

  arr.forEach(e => {
      if(e % 2 == !0) {
          newArr.push(e)
      }
  })
  return newArr;
}

let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
