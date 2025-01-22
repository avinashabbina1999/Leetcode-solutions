class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        answers = []
        def helper(answers,s,m,n):
            if(m==0 and n==0):
                answers.append(s)
                return
            if(m>0):
                helper(answers,s+'(',m-1,n)
            if(n>m):
                helper(answers,s+')',m,n-1)
        helper(answers,'(',n-1,n)
        return answers
    
    