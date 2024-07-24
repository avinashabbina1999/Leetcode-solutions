class Solution {
    public int numberOfAlternatingGroups(int[] colors) {
        int alt = 0,i = 0,n = colors.length;
        while(i<n){
            if((colors[i%n]!=colors[(i+1)%n]) && (colors[(i+2)%n]!=colors[(i+1)%n]))
                alt++;
            i++;
        }
        return alt;
    }
}