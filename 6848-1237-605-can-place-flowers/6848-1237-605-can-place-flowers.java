class Solution {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {
        int i = 0;

        while(i<flowerbed.length && n>0){
            boolean left = false,right = false;

            if(flowerbed[i]==0){
                if(i==0 || flowerbed[i-1]==0)
                    left = true;
                if(i==flowerbed.length-1 || flowerbed[i+1]==0)
                    right = true;
            }

            if(left && right){
                flowerbed[i] = 1;
                n--;
            }
            i++;   
        }
        return n==0;
    }
}