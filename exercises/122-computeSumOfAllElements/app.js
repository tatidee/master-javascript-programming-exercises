function computeSumOfAllElements(arr) {
  // your code here
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    );
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
