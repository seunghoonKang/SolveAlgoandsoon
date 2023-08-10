function solution(players, callings) {
    const map = new Map();
    players.forEach((player,index) => {
        map.set(player, index )
    })

    callings.forEach((calling) => {
       const callingPerson = calling
       const overtakenPerson = players[map.get(calling) - 1];
       const temp = players[map.get(calling) - 1];
        
       players[map.get(calling) - 1] = players[map.get(calling)];
       players[map.get(calling)] = temp; 
       
       map.set(callingPerson, map.get(callingPerson) - 1)
       map.set(overtakenPerson, map.get(overtakenPerson) + 1)
    })
    return players
}
