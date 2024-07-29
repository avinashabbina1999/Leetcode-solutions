class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        ans = []
        list1 = [1]
        ans.append(list1)
        while numRows>1:
            list2 = []
            list2.append(1)
            for i in range(len(list1)-1):
                list2.append(list1[i]+list1[i+1])
            list2.append(1)
            ans.append(list2)
            list1 = list2
            numRows-=1
        return ans
        