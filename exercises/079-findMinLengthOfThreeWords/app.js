// Write your function here
function findMinLengthOfThreeWords(str,str1,str2){
return Math.min(str.length,str1.length,str2.length)
}
let output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1