function solution(N, stages) {
  let failUsersNumber = 0;
  let failUsersLength = 0;
  let res = [];
  let answer = [];
    
  for (let i = 1; i <= N; i++) {
    for (let j = 0; j < stages.length; j++) {
      if (i === stages[j]) {
        failUsersNumber += 1;
        failUsersLength += 1;
      }
    }

    res.push({
      key: i,
      value: failUsersNumber / (stages.length - failUsersLength),
    });
    failUsersNumber = 0;
  }

  const objects = res.sort((a,b) => b.value - a.value)
  objects.map((object) => {
      answer.push(object.key)
  })
    return answer
}