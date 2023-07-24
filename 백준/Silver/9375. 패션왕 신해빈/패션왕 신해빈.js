const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const fs = require("fs");
const [testCases, ...input] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split(`\n`);

const clothes = [];

for (let i = 0; i < input.length; i++) {
  if (isNaN(input[i])) {
    clothes[clothes.length - 1].push(input[i].split(" "));
  } else {
    clothes.push([]);
  }
}

clothes.forEach((clothesArr) => {
  const map = new Map();
  let res = 1;

  clothesArr.forEach((cloth) => {
    !map.has(cloth[1])
      ? map.set(cloth[1], 1)
      : map.set(cloth[1], map.get(cloth[1]) + 1);
  });
  map.forEach((value) => (res *= value + 1));
  console.log(res - 1);
});
