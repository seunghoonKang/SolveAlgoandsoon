let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = input.map((i) => i.split("\n"));
let res = [];
let maxLength = [];
let count = 0;

for (maxLeng of arr) {
  maxLength.push(maxLeng[0].length);
}
maxLength = Math.max(...maxLength);

while (count !== maxLength) {
  for (let i = 0; i < 5; i++) {
    if (!arr[i][0][count]) {
      continue;
    } else {
      res.push(arr[i][0][count]);
    }
  }
  count++;
}

console.log(res.join(""));
