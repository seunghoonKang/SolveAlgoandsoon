let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');


let numA = Number(input[0]);
let numB = Number(input[1]);

if (numA < numB){
  console.log('<');
}
else if (numA > numB){
  console.log('>');
}
else {
  console.log('==');
}

