class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        arr = [0]*(len(nums)+1)
        for i in range(len(nums)):
            arr[nums[i]] = 1
        for i in range(len(arr)):
            if arr[i]==0:
                return i
        return None