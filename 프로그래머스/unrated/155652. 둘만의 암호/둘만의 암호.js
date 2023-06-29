function solution(s, skip, index) {
    let arr = [];
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let password = s.split("");
  let skipWord = skip.split("");
  skipWord.forEach((word) => {
    let location = alphabet.indexOf(word);
    alphabet.splice(location, 1);
  });
  password.forEach((digit) => {
    let digitLoc = alphabet.indexOf(digit);
    if (digitLoc + index - alphabet.length >= alphabet.length) {
      arr.push(alphabet[digitLoc + index - alphabet.length - alphabet.length]);
    }
    else if (digitLoc + index >= alphabet.length) {
      arr.push(alphabet[digitLoc + index - alphabet.length]);
    } else {
      arr.push(alphabet[digitLoc + index]);
    }
  });
  return arr.join("");
}