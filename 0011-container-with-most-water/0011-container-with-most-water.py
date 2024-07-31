class Solution:
    def maxArea(self, nums: List[int]) -> int:
        i,j = 0,len(nums)-1
        max_area = -1
        while i<j:
            area = (j-i)*min(nums[i],nums[j])
            if area>max_area:
                max_area = area
            if nums[i]<nums[j]:
                i+=1
            else:
                j-=1
        return max_area
