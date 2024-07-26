class Solution:
    def addBinary(self, a: str, b: str) -> str:
        carry,i,j,ans = 0, len(a)-1, len(b)-1, ""
        
        while i>=0 or j>=0:
            sum1= carry
            if i>=0:
                sum1+=int(a[i])
                i-=1
            if j>=0:
                sum1+=int(b[j])
                j-=1
            ans+=str(sum1%2)
            carry = sum1//2
        if carry > 0:
            ans+=str(carry)
        return ans[::-1]