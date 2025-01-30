/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let one = Infinity, two = Infinity;
    for(let i=0;i<nums.length;i++){
        if(nums[i]<=one){
            one = nums[i];
            // two = Infinity;
        }else if(nums[i]<=two){
            two = nums[i];
        }else if(nums[i]>one && nums[i]>two){
            return true;
        }
    }
    return false;
};