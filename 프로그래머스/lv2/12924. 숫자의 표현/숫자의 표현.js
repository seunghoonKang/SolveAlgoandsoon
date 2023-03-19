function solution(n) {
    let sum = 0;
    let count = 0;
    for(let i = 1; i < n; i++){
        sum += i
        for(let j = i + 1; j < n; j++){
                sum += j
            if(sum === n){
                count++;
                sum = 0;
                break;
            } else if (sum > n){
                sum = 0;
                break;
            }
        }
    }
    return count + 1 //자기자신
}