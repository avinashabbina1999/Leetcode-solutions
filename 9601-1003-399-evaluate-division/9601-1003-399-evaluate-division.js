/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
        const graph = {}

        const build = () => {
            for(let i=0;i<equations.length;i++){
                const [source,dest] = equations[i]
                const value = values[i]
                if(!(source in graph)) graph[source] = {}
                if(!(dest in graph)) graph[dest] = {}

                graph[source][dest] = value
                graph[dest][source] = 1/value
            }
        }

        ans = []

        const dfs = (source,dest,visited) =>{
            if(!(source in graph) || !(dest in graph)) return -1.0
            if(dest in graph[source]) return graph[source][dest]
            if(source===dest) return 1.0
            const neighbours = graph[source]
            visited.add(source)
            for(let neighbour in neighbours){
                if(!visited.has(neighbour)){
                    result = dfs(neighbour,dest,visited)
                    if(result!==-1.0) return graph[source][neighbour]*result
                }            
            }
            return -1.0
        }
        build()

        for(let query of queries){
            const [source,dest] = query
            const visited = new Set()
            ans.push(dfs(source,dest,visited))
        }
        return ans
};