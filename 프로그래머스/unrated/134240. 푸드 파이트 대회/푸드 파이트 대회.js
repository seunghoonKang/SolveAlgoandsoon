function solution(food) {
    let water = food[0];
    let res = '';
    for(let i = 1; i < food.length; i++){
        let repeat = Math.floor(food[i] / 2)
        if(repeat > 0){
        for(let j = 0; j < repeat; j++){
            res += String(i)
            }
        }
    }
    res += '0'
    for(let i = food.length - 1; i > 0; i--){
        let repeat = Math.floor(food[i] / 2)
        if(repeat > 0){
        for(let j = 0; j < repeat; j++){
            res += String(i)
            }
        }
    }
    return res
}