// Write your function here
// function isSameLength(word,word1){
// let length
// for(i = 0; i < word.length + word1.length; i++){
// if(word.length == word1.length)
//     return true;
// else{
//     return false
// }
// }

// }

// let output = isSameLength('wordsrr', 'superrr');
// console.log(output); // --> true
function isSameLength(word1, word2) {
    return word1.length === word2.length
}
let output = isSameLength('words', 'super');
console.log(output); // --> true