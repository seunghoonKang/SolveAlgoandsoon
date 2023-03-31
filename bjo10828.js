let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

/** 
push X: 정수 X를 스택에 넣는 연산이다.
pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 스택에 들어있는 정수의 개수를 출력한다.
empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
*/
const [, ...items] = input;
const arr = [];
const res = [];
// push 1, push 2, top, size, empty, pop, pop, pop, size, empty, pop, push 3, empty, top
// for (let item of items) {
//   if (item.includes("push")) {
//     arr.push(Number(item.split(" ")[1]));
//   } else if (item === "top") {
//     if (arr.length !== 0) {
//       res.push(arr[arr.length - 1]);
//     } else res.push(-1);
//   } else if (item === "size") {
//     res.push(arr.length);
//   } else if (item === "empty") {
//     if (arr.length === 0) {
//       res.push(1);
//     } else {
//       res.push(0);
//     }
//   } else if (item === "pop") {
//     if (arr.length === 0) {
//       res.push(-1);
//     } else {
//       let popitem = arr.pop();
//       res.push(Number(popitem));
//     }
//   }
// }

//Refactoring
for (let item of items) {
  if (item.includes("push")) {
    arr.push(Number(item.split(" ")[1]));
  } else if (item === "top") {
    arr.length !== 0 ? res.push(arr[arr.length - 1]) : res.push(-1);
  } else if (item === "size") {
    res.push(arr.length);
  } else if (item === "empty") {
    arr.length !== 0 ? res.push(0) : res.push(1);
  } else if (item === "pop") {
    arr.length !== 0 ? res.push(arr.pop()) : res.push(-1);
  }
}

console.log(res.join("\n"));
