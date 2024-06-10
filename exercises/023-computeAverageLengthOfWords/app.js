// Write your function here
function computeAverageLengthOfWords(str, str2) {
    
    let totalLength = str.length + str2.length;
  
    let promedio = totalLength / 2;
  
    return promedio;
  }
  
  let output = computeAverageLengthOfWords('code', 'programs');
  console.log(output); // Output: 6
  