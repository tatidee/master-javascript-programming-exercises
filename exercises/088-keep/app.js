// Write your function here
function keep(arr, c){

return arr.filter((word) => word === c);
}
let output = keep([1, 2, 3, 2, 1], 2) 
console.log(output); // --> [2, 2]