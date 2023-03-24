let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

let room = [];
let res = "";

for (let k = 1; k <= input[0]; k++) {
  const roomCase = input[k].split(" ").map((item) => Number(item));
  checkin(roomCase[0], roomCase[1], roomCase[2]);
}

function checkin(W, H, N) {
  for (let i = 1; i <= H; i++) {
    for (let j = 1; j <= W; j++) {
      if ((String(j) + String(i)).length === 2) {
        room.push(String(j) + String(i).padStart(2, "0"));
      } else if (
        (String(j) + String(i)).length === 3 &&
        String(i).length === 1
      ) {
        room.push(String(j) + String(i).padStart(2, "0"));
      } else {
        room.push(String(j) + String(i));
      }
      if (room.length === N) {
        res = room.pop();
        room = [];
        return console.log(res);
      }
    }
  }
}
