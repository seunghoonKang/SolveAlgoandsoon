let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

input.forEach((i) => console.log(i));
