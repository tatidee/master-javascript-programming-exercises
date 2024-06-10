// Write your function here
function getLastElementOfProperty(obj, key) {
    // your code here
     if ( Array.isArray( obj[key] ) === false ){
        return undefined;
      }else if ( obj[key][0] === undefined){
        return undefined;
      }else{
        return obj[key][obj[key].length - 1];
      }
  
  }
let obj = {
    key: [1, 2, 5]
  };
  let output = getLastElementOfProperty(obj, 'key');
  console.log(output); // --> 5