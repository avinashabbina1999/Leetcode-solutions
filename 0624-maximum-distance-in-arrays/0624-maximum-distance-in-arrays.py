class Solution:
    def maxDistance(self, arrays: List[List[int]]) -> int:
        minimum = arrays[0][0]
        maximum = arrays[0][-1]
        maxDist = 0

        for i in range(1,len(arrays)):
            maxDist = max(abs(arrays[i][-1]-minimum),abs(maximum-arrays[i][0]),maxDist)
            minimum = min(arrays[i][0],minimum)
            maximum = max(arrays[i][-1],maximum)
        
        return maxDist