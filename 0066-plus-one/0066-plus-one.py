class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        carry = 1
        for i in range(len(digits)-1,-1,-1):
            digits[i]+=carry
            if digits[i]>9:
                digits[i] = 0
                carry = 1
            else:
                carry = 0
                break
        if carry == 1:
            ans = []
            ans.append(1)
            for digit in digits:
                ans.append(digit)
            return ans
        return digits