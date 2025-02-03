class Solution {
    public int longestSubarray(int[] nums) {
        int l=0,count=0,num=0;

        for(int i=0;i<nums.length;i++){
            if(nums[i]==0)
                num++;
            if(num>1){
                while(nums[l]==1)
                    l++;
                l++;
                num--;
            }
            count = Math.max(count,i-l);
        }
        return count;
    }
}