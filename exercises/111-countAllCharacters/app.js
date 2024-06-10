// Write your function here
function countAllCharacters(str) {
    n={}
    if (str ==="") return n
    for (let i =0; i<str.length; i++){
      if( typeof n[str[i]] === "undefined")
      {
        n[str[i]]=1
      }
      else n[str[i]]+=1
    }
    return n
  }
  let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}