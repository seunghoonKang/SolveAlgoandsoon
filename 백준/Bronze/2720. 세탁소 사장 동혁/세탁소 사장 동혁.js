let fs = require("fs");
let [testsNum, ...tests] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let quarter = 25;
let dime = 10;
let nickel = 5;
let penny = 1;
let needQuater = 0;
let needDime = 0;
let needNickel = 0;
let needPenny = 0;

for (let i = 0; i < testsNum; i++) {
  let change = tests[i];
  if (Math.floor(change / quarter) >= 1) {
    needQuater = Math.floor(change / quarter);
    change -= quarter * needQuater;
  }
  if (Math.floor(change / dime) >= 1 && change > 0) {
    needDime = Math.floor(change / dime);
    change -= dime * needDime;
  }
  if (Math.floor(change / nickel) >= 1 && change > 0) {
    needNickel = Math.floor(change / nickel);
    change -= nickel * needNickel;
  }
  if (Math.floor(change / penny) >= 1 && change > 0) {
    needPenny = Math.floor(change / penny);
    change -= penny * needPenny;
  }
  console.log(needQuater, needDime, needNickel, needPenny);
  needQuater = 0;
  needDime = 0;
  needNickel = 0;
  needPenny = 0;
}