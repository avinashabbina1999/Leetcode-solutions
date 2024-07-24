class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        int ind = -1,start = 0,end = nums.size()-1;
        while(start<=end){
            int mid = (start+end)/2;
            if(nums[mid]==target)
                return mid;
            else if(nums[mid]>target)
                end = mid-1;
            else{
                ind = mid;
                start = mid+1;
            }
        }
        return ind+1;
    }
};