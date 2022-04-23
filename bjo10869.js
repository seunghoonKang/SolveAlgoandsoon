let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let a = Number(input[0])
let b = Number(input[1])

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(Math.floor(a/b)) //하도 틀려서 혹시..? 하면서 floor 적어주니까 되네 ^,^
console.log(a%b)