function solution(number) {
    let count = 0;
    for(let i = 0; i < number.length; i++){
        for(let j = 1; j < number.length; j++){
            for(let k = 2; k < number.length; k++){
                if(number[i] + number[j] + number[k] === 0 && i !== j && j!== k && i !== k && i < j && i < k && j < k){
                    count++;
                }
            }
        }
    }
    return count;
}