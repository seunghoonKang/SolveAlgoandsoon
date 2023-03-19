const fs = require("fs");
// const input = fs.readFileSync("./dev/stdin").toString().split(" ");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

let [_, ...rests] = input;

rests = rests.sort((a, b) => a - b);

rests.forEach((rest) => console.log(Number(rest)));
