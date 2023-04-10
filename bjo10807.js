let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

//먼저 해결한 풀이
const [N, nums, v] = input;
let integer = nums.split(" ");
let count = 0;

integer.map((int) => Number(int) === Number(v) && count++);

console.log(count);

/** 다른 풀이 
const [N, nums, v] = input;
let integer = nums.split(" ");

console.log(integer.filter((x) => x == v).length);
*/
