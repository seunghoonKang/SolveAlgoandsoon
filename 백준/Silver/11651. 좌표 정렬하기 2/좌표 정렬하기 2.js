let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [, ...arr] = input;
const item = arr.map((i) => i.split(" ").map((nums) => Number(nums)));

item.sort((a, b) => (a[1] !== b[1] ? a[1] - b[1] : a[0] - b[0]));

console.log(item.map((i) => i.join(" ")).join("\n"));
