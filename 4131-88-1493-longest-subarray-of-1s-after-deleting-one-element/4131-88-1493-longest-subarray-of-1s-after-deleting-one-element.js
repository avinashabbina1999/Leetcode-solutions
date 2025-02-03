/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let l = 0,count = 0,num = 0

    for(let i=0;i<nums.length;i++){
        if(nums[i]===0)
            num++
        
        if(num>1){
            while(nums[l]===1)
                l++
            l++
            num--
        }
        count = Math.max(count,i-l)
    }
    return count
};