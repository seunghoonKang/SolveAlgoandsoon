let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

let result = 0;
for (let i = 1; i <= input; i++) {
  let num = i.toString();
  let numloc = num.length;
  let sum = 0;
  for (let j = 0; j < numloc; j++) {
    sum += Number(num[j]);
  }
  sum += Number(num);
  if (sum === Number(input)) {
    result = i;
    break;
  }
  sum = 0;
}
console.log(result);
