// Write your function here
function getOddLengthWordsAtProperty(obj, key) {
    // your code here
  
    if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
      return []
  }

  let arr = obj[key]
  let newArr = []

  arr.forEach(e => {
      if(e.length % 2 === 1) {
          newArr.push(e)
      }
  })
  return newArr;
}
let obj = {
    key: ['It', 'has', 'some', 'words']
  };
  let output = getOddLengthWordsAtProperty(obj, 'key');
  console.log(output); // --> ['has', 'words']