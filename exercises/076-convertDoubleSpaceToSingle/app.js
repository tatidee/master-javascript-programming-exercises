function convertDoubleSpaceToSingle(str) {
    // your code here
    //return str.split(' ').filter(words => words !== '').join(' ');
    return str.replace(/\s+/g, ' ')
}

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
