class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        ele = set()
        for i in range(len(nums)):
            if nums[i] in ele:
                return True
            ele.add(nums[i])
        return False