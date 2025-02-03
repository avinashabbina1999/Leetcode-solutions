class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        l,count,num = 0,0,0

        for i in range(len(nums)):
            if nums[i]==0:
                num+=1
            if num > k:
                while nums[l]==1:
                    l+=1
                l+=1
                num-=1
            count = max(count,i-l+1)

        return count