class Solution {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        List<Boolean> list = new ArrayList<>();

        int max = -1;

        for(int candy : candies)
            if(candy>max) 
                max = candy;

        for(int i=0;i<candies.length; i++)
            list.add((candies[i]+extraCandies >= max) ? true : false);
        
        return list;
    }
}