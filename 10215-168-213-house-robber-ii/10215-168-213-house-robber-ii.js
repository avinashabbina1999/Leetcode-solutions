/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

    if(nums.length<=2)
        return Math.max(...nums);
        
    const arr1 = nums.slice(0,nums.length-1);
    const arr2 = nums.slice(1);

    let dp1 = Array(nums.length-1).fill(0);
    dp1[0] = arr1[0];
    dp1[1] = Math.max(dp1[0],arr1[1]);

    for(let i =2;i<nums.length-1;i++)
        dp1[i] = Math.max(dp1[i-1],arr1[i]+dp1[i-2]);

    let dp2 = Array(nums.length-1).fill(0);
    dp2[0] = arr2[0];
    dp2[1] = Math.max(dp2[0],arr2[1]);

    for(let i =2;i<nums.length-1;i++)
        dp2[i] = Math.max(dp2[i-1],arr2[i]+dp2[i-2]);

    return Math.max(dp1[nums.length-2],dp2[nums.length-2]);
};