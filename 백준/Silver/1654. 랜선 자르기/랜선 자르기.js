let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [firstLine, ...arr] = input;
let [N, requiredCable] = firstLine.split(" ");

const cables = arr.map(Number).sort((a, b) => a - b);

let left = 0;
let right = cables[cables.length - 1]; 
while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let count = 0;
  cables.map((cable) => (count += Math.floor(cable / mid)));
  if (count >= requiredCable) {
    left = mid + 1;
  } else if (count < requiredCable) {
    right = mid - 1;
  }
}
console.log(right);