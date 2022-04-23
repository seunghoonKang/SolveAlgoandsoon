let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

let gugudan = Number(input)

for (let i =1; i<10; i++) {
  console.log(`${gugudan} * ${i} = ${gugudan * i}`);
}