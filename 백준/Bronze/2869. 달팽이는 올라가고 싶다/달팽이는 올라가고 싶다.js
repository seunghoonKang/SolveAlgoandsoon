let fs = require("fs");
let [A,B,V] = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

console.log(Math.ceil((V - B) / (A - B)));
