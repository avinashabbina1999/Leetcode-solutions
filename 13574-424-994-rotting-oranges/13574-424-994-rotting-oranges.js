/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const queue = []
    let fresh = 0
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]===2) queue.push([i,j])
            if(grid[i][j]===1) fresh++
        }
    }

    if(fresh===0) return 0

    let minute = -1
    const dir = [[1,0],[-1,0],[0,1],[0,-1]]
    while(queue.length>0){
        let len = queue.length
        for(let i=0;i<len;i++){
            let [x,y] = queue.shift()
            for(let [dx,dy] of dir){
                let cx = x+dx,cy = y+dy
                if(cx > -1 && cx < grid.length && cy > -1 && cy < grid[0].length && grid[cx][cy]===1){
                    fresh--
                    grid[cx][cy] = 2
                    queue.push([cx,cy])
                }
            }         
        }
        minute++
    }
    return fresh? -1 : minute
};