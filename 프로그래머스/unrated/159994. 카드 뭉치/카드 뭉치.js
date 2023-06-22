function solution(cards1, cards2, goal) {
    const length = cards1.length + cards2.length
    
    for(let i = 0; i < length; i++){
        if(cards1[0] === goal[0]){
            cards1.shift()
            goal.shift()
        }else if(cards2[0] === goal[0]){
            cards2.shift()
            goal.shift()
        }
    }
    if(goal.length === 0 ){
        return "Yes"
    }else {
        return "No"
    }
}