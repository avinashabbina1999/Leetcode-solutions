class Solution {
    public int pivotIndex(int[] nums) {
        int sum = 0,leftSum = 0,rightSum = 0;
        for(int i=0;i<nums.length;i++)
            sum+= nums[i];
        
        for(int i=0;i<nums.length;i++){
            rightSum = sum-leftSum;
            leftSum+= nums[i];
            if(rightSum==leftSum)
                return i;
        }
        return -1;
    }
}