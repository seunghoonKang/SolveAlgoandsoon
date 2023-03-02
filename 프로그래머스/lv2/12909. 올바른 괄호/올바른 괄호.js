function solution(s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[0] === ")") {
      return false;
    }
    if(answer < 0) { return false}
    if (s[i] === "(") {
      answer++;
    } else if (s[i] === ")" ) {
      answer--;
    }
  }
  if (answer === 0) {
    return true;
  } else {
    return false;
  }
}

