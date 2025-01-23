/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {

    let goal = nums.length-1;
    for(let i=nums.length-2;i>-1;i--)
        if(i+nums[i]>=goal)
            goal = i;
    return goal === 0;
    // target = Array(nums.length+1).fill(false);

    // target[0] = true;

    // for(let i=0;i<nums.length;i++){
    //     if(target[i]===true){
    //         for(let j=1;j<=nums[i];j++){
    //             if(i+j<nums.length){
    //                 target[i+j] = true;
    //             }
    //         }
    //     }
    // }
    // return target[nums.length-1];
};