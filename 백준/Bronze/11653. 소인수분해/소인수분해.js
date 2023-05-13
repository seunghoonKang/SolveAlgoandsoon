let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

let k = 2;

while (k <= input && input !== 1) {
  if (input % k === 0) {
    input = input / k;
    console.log(k);
  } else {
    k++;
  }
}
