class Solution:
    def findWords(self, words: List[str]) -> List[str]:
        a,b,c = set("QWERTYUIOPqwertyuiop"),set("ASDFGHJKLasdfghjkl"),set("ZXCVBNMzxcvbnm")
        ans = []
        for word in words:
            word_set = set(word)
            if word_set.issubset(a) or word_set.issubset(b) or word_set.issubset(c):
                ans.append(word)
        return ans