function fromListToObject(array) {
  // your code here
  const object = {};
for (let [key, value] of array) {
  object[key] = value;
}
return object
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // --> { make: 'Ford', model: 'Mustang', year: 1964 }
