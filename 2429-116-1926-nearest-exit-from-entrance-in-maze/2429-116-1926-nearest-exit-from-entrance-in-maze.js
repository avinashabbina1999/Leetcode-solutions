/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    let count = 0
    const visited = new Set(),queue = [entrance],dirs = [[1,0],[-1,0],[0,1],[0,-1]]

    const inBoundX = point => point>-1 && point<maze.length
    const inBoundY = point => point>-1 && point<maze[0].length

    while(queue.length>0){
        let len = queue.length
        for(let i=0;i<len;i++){
            const [x,y] = queue.shift()
            let key = `${x},${y}`
            if(!visited.has(key)){
                visited.add(key)
                for(let dir of dirs){
                    let cx = x+dir[0],cy = y+dir[1]
                    if((!inBoundX(cx) || !inBoundY(cy)) && count>0) return count
                    else if(inBoundX(cx) && inBoundY(cy) && maze[cx][cy]==='.') 
                        queue.push([cx,cy])
                }
            }
           
        }
        count++
    }
    return -1
};