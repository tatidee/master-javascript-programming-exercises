function getLengthOfThreeWords(word1, word2, word3) {
  // your code here
  let length = 0;
  for (let i = 0; i < word1.length + word2.length + word3.length; i++) {
    length++;
  }
  return length;
}


let output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); // --> 14
