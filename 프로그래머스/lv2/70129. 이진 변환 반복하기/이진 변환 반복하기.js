function solution(s) {
    let res = ''
    let zero = 0
    while (s > 1) {
    s = s.split('')
    let temp = s.filter(v => v === '1').length
    zero += s.length - temp;
    //10진수 2진수로
    s = temp.toString(2);
    res++;
  }
  return [res, zero];
}
