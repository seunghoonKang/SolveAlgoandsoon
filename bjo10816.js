let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

const cardsArr = input[1].split(" ").map(Number);
const numsArr = input[3].split(" ").map(Number);

let map = new Map();

cardsArr.forEach((elem) => {
  if (map.has(elem)) map.set(elem, map.get(elem) + 1);
  else map.set(elem, 1);
});
let answer = [];
numsArr.forEach((elem) => answer.push(map.get(elem) || 0));
console.log(answer.join(" "));
