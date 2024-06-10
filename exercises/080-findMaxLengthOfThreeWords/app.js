// Write your function here
function findMaxLengthOfThreeWords(str,str1,str2){
    return Math.max(str.length,str1.length,str2.length)
    }
    let output = findMaxLengthOfThreeWords('a', 'be', 'see');
    console.log(output); // --> 1