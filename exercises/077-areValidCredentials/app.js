// Write your function here
function areValidCredentials(n,c){
if(n.length >= 3 && c.length >= 8){
    return true
}else return false

}
let output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> true