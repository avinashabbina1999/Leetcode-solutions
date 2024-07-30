class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        ans = set()
        for i in range(len(nums)-2):
            target = 0 - nums[i]
            j,k = i+1,len(nums)-1
            while j < k:
                if nums[j]+nums[k] == target:
                    ans.add((nums[i],nums[j],nums[k]))
                    j+=1
                    k-=1
                elif nums[j]+nums[k] > target:
                    k-=1
                else:
                    j+=1
        return list(ans)