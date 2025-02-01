class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        maxSum = 0
        for i in range(k):
            maxSum+= nums[i]
        
        interSum = maxSum

        for i in range(k,len(nums)):
            interSum+= nums[i] - nums[i-k]
            maxSum = max(interSum,maxSum)

        return maxSum / k