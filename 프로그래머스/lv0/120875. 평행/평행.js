function slope(a, b) { 
  return (Math.abs(b[1] - a[1]) / Math.abs(b[0] - a[0]));
}

function solution(dots) {
  const slope01 = slope(dots[0], dots[1]); 
  const slope02 = slope(dots[0], dots[2]);
  const slope03 = slope(dots[0], dots[3]);
  const slope23 = slope(dots[2], dots[3]);
  const slope13 = slope(dots[1], dots[3]);
  const slope12 = slope(dots[1], dots[2]);
  
  if (slope01 === slope23 || slope02 === slope13 || slope03 === slope12) {
    return 1;
  } else {
    return 0;
  }
}
