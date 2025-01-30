/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    ans = [];

    for(let candy of candies){
        ans.push(candy + extraCandies >= Math.max(...candies) ? true : false)
    }
    return ans;

};