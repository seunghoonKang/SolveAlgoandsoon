function solution(keymap, targets) {
    const map = new Map()
    const arr = [];

    for (const key of keymap) {
     for (let i = 0; i < key.length; i++) {
      if (!map.has(key[i]) || i + 1 < map.get(key[i])) map.set(key[i], i + 1);
    }
  }
    for (const target of targets){
        let count = 0;
        for(let i = 0; i < target.length; i++){ 
            count += map.get(target[i])
        }
        arr.push(count || -1)
        count = 0
    }
    return arr
}