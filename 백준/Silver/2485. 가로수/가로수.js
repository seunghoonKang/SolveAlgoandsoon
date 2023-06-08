const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");

let [N, ...trees] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map(Number);


let distance = [];
for (let i = 0; i < N; i++) {
  if (trees[i + 1]) {
    distance.push(trees[i + 1] - trees[i]);
  }
}

function getGcd(x, y) {
  let tempValue;
  while (x !== 0) {
    tempValue = y % x;
    y = x;
    x = tempValue;
  }
  return y;
}

let gcd = trees[N - 1]; 
for (let j = 0; j < distance.length; j++) {
  if (distance[j + 1]) {
    let tempGcd = getGcd(distance[j + 1], distance[j]);
    if (tempGcd < gcd) gcd = tempGcd; 
  }
}

let result = 0;
for (let k = 0; k < N - 1; k++) {
  const tempDistance = distance[k];
  if (tempDistance !== gcd) {
    result += tempDistance / gcd - 1;
  }
}
console.log(result);
