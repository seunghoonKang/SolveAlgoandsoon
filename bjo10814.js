let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [, ...arr] = input;

arr.sort((a, b) => a.split(" ")[0] - b.split(" ")[0]);
console.log(arr.join("\n"));
