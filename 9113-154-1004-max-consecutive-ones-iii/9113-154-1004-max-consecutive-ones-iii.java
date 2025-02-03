class Solution {
    public int longestOnes(int[] nums, int k) {
        int l=0,count=0,num=0;
        for(int i=0;i<nums.length;i++){
            if(nums[i]==0)
                num++;
            if(num>k){
                while(nums[l]==1)
                    l++;
                l++;
                num--;
            }
            count = Math.max(count,i-l+1);
        }
        return count;
    }
}