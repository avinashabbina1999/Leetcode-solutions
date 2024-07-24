class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        int carry = 1;
        for(int i=digits.size()-1;i>=0;i--){
            if(carry==0)
                break;
            digits[i]+=carry;
            carry--;
            if(digits[i]==10){
                digits[i]=0;
                carry++;
            }
        }
        if (carry == 1)
            digits.insert(digits.begin(), 1);
        return digits;
    }
};