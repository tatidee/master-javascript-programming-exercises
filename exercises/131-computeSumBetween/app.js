function computeSumBetween(num1, num2) {
    // your code here
    let product = 0;
  
    if(num2>num1){
      while (num2>num1){
        product+=num1;
        num1++;
      }
    }else {
      product = 0;
    }
    
    return product;
  }

let output = computeSumBetween(2, 5);
console.log(output); // --> 9
