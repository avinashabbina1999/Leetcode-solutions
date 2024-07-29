class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        list1 = [1]
        if rowIndex == 0:
            return list1
        row = 0
        while row<rowIndex:
            list2 = []
            list2.append(1)
            for i in range(len(list1)-1):
                list2.append(list1[i]+list1[i+1])
            list2.append(1)
            list1 = list2
            row+=1
        return list2