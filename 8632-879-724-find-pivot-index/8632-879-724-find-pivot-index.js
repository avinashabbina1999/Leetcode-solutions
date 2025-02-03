/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const prefix = Array(nums.length).fill(0)
    const postfix = Array(nums.length).fill(0)

    prefix[0] = nums[0]
    postfix[nums.length-1] = nums[nums.length-1]

    for(let i=1;i<nums.length;i++)
        prefix[i] = prefix[i-1] + nums[i]

    for(let i=nums.length-2;i>-1;i--)
        postfix[i] = postfix[i+1] + nums[i]

    for(let i=0;i<nums.length;i++)
        if(prefix[i]===postfix[i])
            return i

    return -1
};