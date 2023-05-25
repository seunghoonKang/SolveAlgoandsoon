let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); 

[testCaseNum, ...arr] = input; 
let res = [...arr];

res.sort((a,b)=>a-b);

console.log(res.join('\n'))