function getAllWords(str, separador) {
    // your code here
    var array = getAllWords.split(separador)
    var espacio = " ";
    for(i =0 ; i <  str.length;i++)
        array.push(str)
    
    return array
}

let output = getAllWords('Radagast the Brown', "espacio");
console.log(output); // --> ['Radagast', 'the', 'Brown']
