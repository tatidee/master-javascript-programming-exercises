function flipEveryNChars(input, n) {
    // your code here
      let result = [];
      for (let i = 0; i < input.length; i += n) {
        let endIndex = Math.min(i + n, input.length);
        let chunk = input.substring(i, endIndex);
        result.push(chunk.split('').reverse().join(''));
      }
    
      return result.join('');
    }


let input = 'a short example';
let output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma
