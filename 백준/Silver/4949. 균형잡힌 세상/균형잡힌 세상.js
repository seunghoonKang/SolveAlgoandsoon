const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
let input = fs.readFileSync(path).toString().trim().split("\n");

function isBalanced(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "[") {
      stack.push(str[i]);
    } else if (str[i] === ")") {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        return "no";
      }
    } else if (str[i] === "]") {
      if (stack[stack.length - 1] === "[") {
        stack.pop();
      } else {
        return "no";
      }
    }
    console.log(stack);
  }
  return stack.length > 0 ? "no" : "yes";
}

for (let i = 0; i < input.length; i++) {
  if (input[i] === ".") break;
  console.log(isBalanced(input[i]));
}
