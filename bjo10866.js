let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

/**
push_front X: 정수 X를 덱의 앞에 넣는다.
push_back X: 정수 X를 덱의 뒤에 넣는다.
pop_front: 덱의 가장 앞에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
pop_back: 덱의 가장 뒤에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 덱에 들어있는 정수의 개수를 출력한다.
empty: 덱이 비어있으면 1을, 아니면 0을 출력한다.
front: 덱의 가장 앞에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
back: 덱의 가장 뒤에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
 */

const [, ...orders] = input;
const arr = [];
const res = [];
for (let order of orders) {
  if (order.includes("push_front")) arr.push(Number(order.split(" ")[1]));
  if (order.includes("push_back"))
    arr.splice(0, 0, Number(order.split(" ")[1]));
  if (order.includes("pop_front"))
    arr.length !== 0 ? res.push(arr.pop()) : res.push(-1);
  if (order.includes("pop_back"))
    arr.length !== 0 ? res.push(arr.shift()) : res.push(-1);
  if (order === "size") res.push(arr.length);
  if (order === "empty") arr.length !== 0 ? res.push(0) : res.push(1);
  if (order === "front")
    arr.length !== 0 ? res.push(arr[arr.length - 1]) : res.push(-1);
  if (order === "back") arr.length !== 0 ? res.push(arr[0]) : res.push(-1);
}
console.log(res.join("\n"));
