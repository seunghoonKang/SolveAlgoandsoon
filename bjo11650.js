let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [, ...arr] = input;
const item = arr.map((i) => i.split(" ").map((nums) => Number(nums)));

item.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));

//console.log(item.map((i) => i.join(" ")));
//  ==> [ '1 -1', '1 1', '2 2', '3 3', '3 4' ]

console.log(item.map((i) => i.join(" ")).join("\n"));
