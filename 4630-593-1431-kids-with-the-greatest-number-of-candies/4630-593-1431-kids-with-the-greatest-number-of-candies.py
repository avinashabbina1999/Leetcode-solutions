class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        ans = []

        for candy in candies:
            ans.append(True if (candy+extraCandies >= max(candies)) else False)

        return ans