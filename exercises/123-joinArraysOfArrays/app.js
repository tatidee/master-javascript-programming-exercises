function joinArrayOfArrays(arr) {
  // your code here
  let newArray = Array.prototype.concat.apply([], arr);
  return newArray
}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']
