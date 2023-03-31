let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

/** 
push X: 정수 X를 큐에 넣는 연산이다.
pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 큐에 들어있는 정수의 개수를 출력한다.
empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
*/

const [, ...orders] = input;
const arr = [];
const res = [];
for (let order of orders) {
  if (order.includes("push")) arr.push(Number(order.split(" ")[1]));
  if (order === "front") arr.length !== 0 ? res.push(arr[0]) : res.push(-1);
  if (order === "back")
    arr.length !== 0 ? res.push(arr[arr.length - 1]) : res.push(-1);
  if (order === "pop") arr.length !== 0 ? res.push(arr.shift()) : res.push(-1);
  if (order === "size") res.push(arr.length);
  if (order === "empty") arr.length !== 0 ? res.push(0) : res.push(1);
}
console.log(res.join(`\n`));
