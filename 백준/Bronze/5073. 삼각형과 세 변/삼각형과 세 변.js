let fs = require("fs");
let lines = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function getTriangleType(a, b, c) {
  const sides = [a, b, c].sort((x, y) => x - y);
  const [sideA, sideB, sideC] = sides;

  if (sideA === 0 && sideB === 0 && sideC === 0) {
    return false;
  } else if (sideA + sideB <= sideC) {
    return "Invalid";
  } else if (sideA === sideB && sideB === sideC) {
    return "Equilateral";
  } else if (sideA === sideB || sideB === sideC || sideA === sideC) {
    return "Isosceles";
  } else {
    return "Scalene";
  }
}

for (const line of lines) {
  const [a, b, c] = line.split(" ").map(Number);
  const result = getTriangleType(a, b, c);
  if (result) {
    console.log(result);
  }
}