class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        s = set(nums)
        if len(s) < 3:
            return max(s)
        s.remove(max(s))
        s.remove(max(s))
        return max(s)
        # m1 = max(nums)
        # if len(nums)<3:
        #     return m1
        # m2 = -sys.maxsize-1
        # for num in nums:
        #     if num > m2 and num<m1:
        #         m2 = num
        # m3 = -sys.maxsize-1
        # for num in nums:
        #     if num > m3 and num<m2 and num<m1:
        #         m3 = num

        # if m3 == -sys.maxsize-1:
        #     return m1
        # return m3