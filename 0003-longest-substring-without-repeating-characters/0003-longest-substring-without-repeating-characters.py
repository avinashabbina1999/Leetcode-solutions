class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        mlength,i,j = 0,0,1
        my_set = set()
        if len(s)==0:
            return 0
        my_set.add(s[0])
        while i<len(s) and j<len(s):
            while j<len(s) and not s[j] in my_set:
                my_set.add(s[j])
                j+=1
            if j< len(s) and s[j] in my_set:
                mlength = max(mlength,len(my_set))
                while s[i]!=s[j]:
                    my_set.remove(s[i])
                    i+=1
                my_set.remove(s[i])
                i+=1
        return max(mlength,len(my_set))