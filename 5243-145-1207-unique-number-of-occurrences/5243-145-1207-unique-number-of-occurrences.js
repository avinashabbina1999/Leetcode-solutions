/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    map = {}
    for(let num of arr)
        map[num] = (map[num] || 0) + 1
    
    set = new Set()

    for(let value of Object.values(map)){
        if(set.has(value))
            return false
        set.add(value)
    }
    return true
};