// Write your function here
function removeElement(arr,c){
    return arr.filter((word) => word != c);

}
let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]