let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, hasCards, M, isHasCarads] = input;
let result = [];

hasCards = hasCards
  .split(" ")
  .sort((a, b) => a - b)
  .map(Number);

isHasCarads = isHasCarads.split(" ").map(Number);

isHasCarads.forEach((card) => {
  let start = 0;
  let end = hasCards.length - 1; //4
  let match = false;

  while (start <= end) {
    let mid = Math.floor(Number((start + end) / 2));
    if (card < hasCards[mid]) {
      end = mid - 1;
    } else if (card > hasCards[mid]) {
      start = mid + 1;
    } else {
      match = true;
      break;
    }
  }
  match ? result.push(1) : result.push(0);
});

console.log(result.join(" "));