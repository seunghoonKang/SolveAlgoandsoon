let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let res = 0;
let 총학점 = 0;

for (let i = 0; i < input.length; i++) {
  const [과목명, 학점, 과목평점] = input[i].split(" ");
  if (과목평점 === "P") {
    continue;
  } else {
    총학점 += Number(학점);
  }
}

for (let j = 0; j < input.length; j++) {
  const [과목명, 학점, 과목평점] = input[j].split(" ");
  switch (과목평점) {
    case "A+":
      res += 학점 * 4.5;
      break;
    case "A0":
      res += 학점 * 4.0;
      break;
    case "B+":
      res += 학점 * 3.5;
      break;
    case "B0":
      res += 학점 * 3.0;
      break;
    case "C+":
      res += 학점 * 2.5;
      break;
    case "C0":
      res += 학점 * 2.0;
      break;
    case "D+":
      res += 학점 * 1.5;
      break;
    case "D0":
      res += 학점 * 1.0;
      break;
    case "F":
      res += 학점 * 0;
      break;
    case "P":
      continue;
    default:
      break;
  }
}
console.log((res / 총학점).toFixed(6));