function getStringLength(string) {
    // your code here
    let contador = 0;
    for (let i of string) {
      contador++;
    }
    return contador;
}

let output = getStringLength('hello');
console.log(output); // --> 5
