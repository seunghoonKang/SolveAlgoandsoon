let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, nums, v] = input;
let integer = nums.split(" ");
let count = 0;

integer.map((int) => Number(int) === Number(v) && count++);

console.log(count);
