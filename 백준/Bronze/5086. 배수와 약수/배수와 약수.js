let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  let [A, B] = input[i].split(" ");
  if (A == 0 || B == 0) {
    continue;
  }
  if (A % B === 0) {
    console.log("multiple");
  } else if (B % A === 0) {
    console.log("factor");
  } else {
    console.log("neither");
  }
}
