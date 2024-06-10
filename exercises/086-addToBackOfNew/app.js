function addToBackOfNew(arr, element) {
    // your code here
    var arr_new = arr.slice();

    arr_new.push(element)
    return arr_new;
}

let input = [1, 2];
let output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]
