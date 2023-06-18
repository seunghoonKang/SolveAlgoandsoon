const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");

const input = fs.readFileSync(path).toString().trim().split("\n");
const T = parseInt(input[0]); 

for (let i = 1; i <= T; i++) {
  const [n, m] = input[i * 2 - 1].split(" ").map(Number);
  const docs = input[i * 2].split(" ").map(Number);
  const q = docs.map((doc, idx) => [doc, idx]); 

  let count = 0; 
  while (true) {
    const [priority, idx] = q.shift();

    if (q.some((doc) => doc[0] > priority)) {
      q.push([priority, idx]);
    } else {
      count++;


      if (idx === m) {
        console.log(count);
        break;
      }
    }
  }
}
