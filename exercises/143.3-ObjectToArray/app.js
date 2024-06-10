function convertObjectToList(obj) {
  // your code here
  const arr = Array.from(Object.keys(obj), k=>[`${k}`, obj[k]]);
   return arr
}

let output = convertObjectToList({ name: 'Holly', age: 35, role: 'producer' });
console.log(output); // --> [ ['name', 'Holly'], ['age', 35], ['role', 'producer'] ]
