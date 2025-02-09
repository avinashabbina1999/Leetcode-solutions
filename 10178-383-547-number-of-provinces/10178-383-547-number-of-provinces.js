/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let count = 0,visited = Array(isConnected.length).fill(false)

    const dfs = key =>{
        if(!visited[key]){
            visited[key] = true
            for(let i = 0;i<isConnected[key].length;i++){
                if(isConnected[key][i]===1){
                    dfs(i)
                }
            }
        }
    }
    for(let i = 0;i<visited.length;i++){
        if(!visited[i]){
            count++
            dfs(i)
        }
    }
    return count
};