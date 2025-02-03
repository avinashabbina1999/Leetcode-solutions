class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        l,count,num = 0,0,0

        for i in range(len(nums)):
            if nums[i]==0:
                num+=1
            if num>1:
                while nums[l]==1:
                    l+=1
                l+=1
                num-=1
            count = max(count,i-l)
        return count