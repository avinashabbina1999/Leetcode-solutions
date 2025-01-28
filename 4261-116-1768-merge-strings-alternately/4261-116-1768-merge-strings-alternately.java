class Solution {
    public String mergeAlternately(String word1, String word2) {
        String ans = new String();
        for(int i=0;i<Math.min(word1.length(),word2.length());i++){
            ans+= word1.charAt(i);
            ans+= word2.charAt(i);
        }
        if(word1.length()<word2.length())
            ans = ans.concat(word2.substring(word1.length()));
        else if(word1.length()>word2.length())
            ans = ans.concat(word1.substring(word2.length()));
        return ans;
    }
}