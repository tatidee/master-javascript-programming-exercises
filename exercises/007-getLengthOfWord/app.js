function getLengthOfWord(word,word1) {
  // your code here
  let length = 0;
  for (let i = 0; i < word.length; i++) {
    length++;
  }
  return length;

}
let output = getLengthOfWord("juan");
console.log(output);