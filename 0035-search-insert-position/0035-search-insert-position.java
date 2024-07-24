class Solution {
    public int searchInsert(int[] nums, int target) {
        int start = 0,end = nums.length-1;
        int ind = -1;
        while(start<=end){
            int mid = (end+start)/2;
            if(nums[mid]==target)
                return mid;
            else if(nums[mid]<target){
                ind = mid;
                start = mid+1;
            }else{
                end = mid-1;
            }
        }
        return ind+1;
    }
}