class Solution:
    def findRestaurant(self, list1: List[str], list2: List[str]) -> List[str]:
        mapping = {}
        ans = 3000
        list = []
        for i in range(len(list1)):
            mapping[list1[i]] = i
        for j in range(len(list2)):
            if list2[j] in mapping:
                if mapping[list2[j]]+j < ans:
                    ans = j + mapping[list2[j]]
                    list = []
                    list.append(list2[j])
                elif mapping[list2[j]]+j == ans:
                    list.append(list2[j])

        return list