
  function getLengthOfTwoWords(word1,word2) {
    // your code here
    let length = 0;
    for (let i = 0; i < word1.length + word2.length; i++) {
      length++;
    }
    return length;
  }
  

  let output = getLengthOfTwoWords("La","juw");
  console.log(output);