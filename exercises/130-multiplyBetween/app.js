function multiplyBetween(num1, num2) {
    // your code here
    let product = 1;
  
    if(num2>num1){
      while (num2>num1){
        product*=num1;
        num1++;
      }
    }else {
      product = 0;
    }
    
    return product;
  }
  


let output = multiplyBetween(2, 5);
console.log(output); // --> 24
