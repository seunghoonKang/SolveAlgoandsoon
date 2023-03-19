let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(" ");

let [x, y, w, h] = input;
let answer = [x, y, w - x, h - y];
console.log(Math.min(...answer));
