class Solution {
    public String reverseVowels(String s) {
        StringBuilder sb = new StringBuilder(s);
        String vowels = "AEIOUaeiou";
        int i=0,j=s.length()-1;
        while(i<j){
            while(i<s.length() && vowels.indexOf(sb.charAt(i))==-1)
                i++;
            while(j>0 && vowels.indexOf(sb.charAt(j))==-1)
                j--;
            if(i<j){
                char temp = sb.charAt(i);
                sb.setCharAt(i,sb.charAt(j));
                sb.setCharAt(j,temp);
                i++;
                j--;
            }
        }
        return sb.toString();
    }
}