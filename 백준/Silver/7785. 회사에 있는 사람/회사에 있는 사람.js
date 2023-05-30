let fs = require("fs");
let [n, ...records] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let result = [];
let set = new Set();

for (let i = 0; i < n; i++) {
  let [name, state] = records[i].split(" ");

  if (state === "enter") {
    set.add(name);
  } else if (state === "leave") {
    set.delete(name);
  }
}

for (let worker of set) {
  result.push(worker);
}

console.log(result.sort().reverse().join("\n"));