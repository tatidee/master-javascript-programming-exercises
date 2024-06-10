function detectOutlierValue(str) {
    let impar = 0;
    let par = 0;
    let result = str.split(' ');
    for (let i of result) {
      if (Number.parseInt(i) % 2 == 0) par += 1;
      if (Number.parseInt(i) % 2 != 0) impar += 1;
    }
    if (par > impar) {
      for (let i = 0; i < result.length; i++) {
        if (Number.parseInt(result[i]) % 2 != 0) return i + 1;
      }
    } else {
      for (let i = 0; i < result.length; i++) {
        if (Number.parseInt(result[i]) % 2 == 0) return i + 1;
      }
    }
  }
  

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // --> 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  // --> 2
