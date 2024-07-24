class Solution:
    def numberOfAlternatingGroups(self, colors: List[int]) -> int:
        size,count = len(colors),0
        for i in range(size):
            if colors[i%size]!=colors[(i+1)%size] and colors[(i+2)%size]!=colors[(i+1)%size]:
                count+=1
        return count