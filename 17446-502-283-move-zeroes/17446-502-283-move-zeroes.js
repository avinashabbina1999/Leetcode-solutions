/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i=0,j=1

    while(j<nums.length && i<j){
        if(nums[i] === 0 && nums[j] !== 0){
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            i++
            j++
        }else if(nums[i] === 0 && nums[j] === 0){
            j++
        }else{
            i++
            j++
        }
    }
};