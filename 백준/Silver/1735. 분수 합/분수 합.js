const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");

let input = fs.readFileSync(path).toString().trim().split("\n");
let [A, B] = input[0].split(" ").map(Number); // 2/7
let [A2, B2] = input[1].split(" ").map(Number); // 3/5

let den1 = A * B2; // 10 분자
let num1 = B * B2; // 35 분모
let den2 = A2 * B; // 21 분자
let sumdden = den1 + den2;

let tempB = num1;
let tempA = sumdden;

while (sumdden !== 0) {
  res = num1 % sumdden;
  num1 = sumdden;
  sumdden = res;
}

console.log(tempA / num1, tempB / num1);