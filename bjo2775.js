let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let cases = input.shift();

for (let i = 0; i < cases; i++) {
  const 층 = input.shift();
  const 호수 = input.shift();

  //2중 배열 만들기
  const house = Array.from(Array(층 + 1), () => Array(호수 + 1).fill(0));
  //층:1 호수:3 ---> [undefined, undefined] => [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0] ]

  //0층
  for (let i = 1; i <= 호수; i++) {
    house[0][i] = i;
  }
  //나머지 층
  for (let i = 1; i <= 층; i++) {
    for (let j = 1; j <= 호수; j++) {
      house[i][j] = house[i - 1][j] + house[i][j - 1];
    }
  }
  console.log(house[층][호수]);
}
