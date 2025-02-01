class Solution {
    public double findMaxAverage(int[] nums, int k) {
        int maxSum = 0,interSum = 0;
        for(int i=0;i<k;i++)
            maxSum+= nums[i];
        interSum = maxSum;
        for(int i=k;i<nums.length;i++){
            interSum+= nums[i]-nums[i-k];
            maxSum = Math.max(maxSum,interSum); 
        }
        return (double) maxSum/k;
    }
}