/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const map = {}

    for(let i=0;i<grid.length;i++)
        map[grid[i]] = (map[grid[i]] || 0)+1

    let res = 0
    for(let i=0;i<grid.length;i++){
        const arr = []
        for(let j=0;j<grid[i].length;j++){
            arr.push(grid[j][i])
        }
        if(arr in map)
            res+= map[arr]
    }
    return res
};