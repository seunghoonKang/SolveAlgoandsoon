function solution(babbling) {
    const canBabbles = ["aya", "ye", "woo", "ma"];

    return babbling.reduce((possible, babbl) => {       
        canBabbles.forEach((canBabble) => {
             if (babbl.includes(canBabble.repeat(2))) return possible;
             babbl = babbl.split(canBabble).join(' ').trim();
        })
        
        if (babbl) return possible;

        return possible += 1;
    }, 0)
}