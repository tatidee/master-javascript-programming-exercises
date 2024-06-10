function findPairForSum(array, number) {
  // your code here
  let pairs = [];
  array.some(n1 => {
    let n2 = array.find(n2 => n1 + n2 == number)
    if (n2) {
      pairs.push(n1, n2); return true;
    };
    return false;
  });
  return pairs
}



let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
