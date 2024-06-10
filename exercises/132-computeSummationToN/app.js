function computeSummationToN(n) {
  // your code here
  let total = 0;
  for(var i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

let output = computeSummationToN(6);
console.log(output); // --> 21

