class Solution {
public:
    bool isPalindrome(int x) {
        if (x<0)
            return false;
        long num = x;
        long ans = 0;
        while(num>0){
            ans = ans*10 + num%10;
            num/=10;
        }
        return x==ans;
    }
};