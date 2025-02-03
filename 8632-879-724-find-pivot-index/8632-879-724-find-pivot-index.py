class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        total,left,right = sum(nums),0,0

        for i in range(len(nums)):
            right = total-left
            left+= nums[i]
            if right==left:
                return i
        return -1