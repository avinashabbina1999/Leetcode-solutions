class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        ind,start,end = -1,0,len(nums)-1
        while start<=end:
            mid = (start+end)//2
            if nums[mid]==target:
                return mid
            elif nums[mid]>target:
                end = mid-1
            else:
                ind = mid
                start = mid+1
        return ind+1