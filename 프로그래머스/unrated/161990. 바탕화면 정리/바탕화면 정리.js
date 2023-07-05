function solution(wallpaper) {
    let [lux, luy, rdx, rdy] = [wallpaper.length, wallpaper[0].length, 0, 0];
    wallpaper.forEach((line, i)=>{
        [...line].forEach((file, j)=>{
            if(file==='#'){
                lux = Math.min(lux, i);
                luy = Math.min(luy, j);
                rdx = Math.max(rdx, i+1);
                rdy = Math.max(rdy, j+1);
            }
        })
    })
    return [lux, luy, rdx, rdy];
}