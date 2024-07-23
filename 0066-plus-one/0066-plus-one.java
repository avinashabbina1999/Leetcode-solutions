class Solution {
    public int[] plusOne(int[] digits) {
        int carry = 0;
        int parry = 0;
        int i = digits.length-1;
        do{
            digits[i]+= 1;
            if(digits[i]==10){
                digits[i] = 0;
                carry = 1;
            }else
                carry = 0;
            i--;
            if(i<0 && carry == 1){
                parry = 1;
                break;
            }
        }while(carry!=0);
        if(parry==1){
            int[] ans = new int[digits.length+1];
            ans[0] = 1;
            for(int j = 0;j<digits.length;j++)
                ans[j+1] = digits[j];
            return ans;
        }
        return digits;
    }
}