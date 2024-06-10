function countCharacter(str, char) {
    // your code here
    let contar = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            contar++;
    }
  }
  return contar;
}
let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
