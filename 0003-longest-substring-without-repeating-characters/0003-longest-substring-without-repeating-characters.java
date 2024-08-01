class Solution {
    public int lengthOfLongestSubstring(String s) {
        int i = 0,j = 1;
        int mlen = 0;
        Set<Character> set = new HashSet<>();
        if(s.length()==0)
            return 0;
        set.add(s.charAt(0));
        while(j<s.length()){
            while(j<s.length() && !set.contains(s.charAt(j))){
                set.add(s.charAt(j));
                j++;
            }
            if(j<s.length() && set.contains(s.charAt(j))){
                mlen = Math.max(mlen,set.size());
                while(s.charAt(i)!=s.charAt(j)){
                    set.remove(s.charAt(i));
                    i++;
                }
                set.remove(s.charAt(i));
                i++;
            }
        }
        return Math.max(mlen,set.size());
    }
}